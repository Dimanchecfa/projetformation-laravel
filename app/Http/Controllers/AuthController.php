<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\BaseController;
use App\Mail\EmailVerify;
use App\Mail\NewPassWordEmaill;
use App\Mail\ResetPasswordEmail;
use App\Mail\WelcomeEmail;
use App\Models\Apprenant;
use App\Models\PasswordReset;
use App\Models\User;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;



class AuthController extends BaseController
{
    public function signin (Request $request) {

        $validate=  Validator::make($request->all() ,[
            'email' => 'required|email' , 
            'password'=> 'required'
        ]);
        if($validate->fails()) {
            return $this->sendError('veuillez remplir tous les champs' , $validate->errors());
        }
       try {
        $loginData = $request->only('email' , 'password');
        if(!auth()->attempt($loginData)){
            return $this->sendError('Email ou mot de passe incorrect.', [],400);
        }
        $user = Auth::user();
        if(!$user->email_verified_at){
            return $this->sendError('Votre compte n\'est pas verifié.', [], 403);
        }
        if($user->is_blocked) {
            return $this->sendError('votre compte est desactivé');
        }
        $token = $user->createToken('authToken')->accessToken;
        $user->last_login = now();
        $user->save();
        $userProfile = [
            'uuid' => $user->uuid,
            'nom' => $user->nom,
            'prenom' => $user->prenom,
            'email' => $user->email,
            'role' => $user->role,
            'token' => $token,
        ];
        return $this->sendResponse($userProfile , 'login success');
         } catch (Exception $e) {
              return $this->sendError('Une erreur est survenue.', [], 500);
            }

        


    } 
   






 
    public function signup( Request $request) {
        $validate = Validator::make($request->all(),[
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required|email',
            'telephone' => 'required',
            'sexe' => 'required',
            'niveau_etude' => 'required',
            'numero_identite_type' => 'required',
            'numero_identite' => 'required',
            'date_delivrance' => 'required',
            'date_expiration' => 'required',
            'adresse' => 'required',
            'ville' => 'required',
            'password' => 'required',
        ]);

        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        $input = $request->all();
        $input['uuid'] = Str::uuid();
        $apprenant = Apprenant::create($input);
        $user = User::create([
            'uuid' => Str::uuid(),
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'apprenant',
            'code_verified_at' => rand(000000, 999999),
        ]);
        Mail::to($user->email)->send(new EmailVerify($user));
        return $this->sendResponse($user, 'User created successfully.');
        
        
    }
    public function VerifyMail(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'code_verified_at' => 'required',
      ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $apprenant = Apprenant::where('email', $request->email)->first();
            $user = User::where('email', $request->email)->first();
            if ($user->code_verified_at == $request->code_verified_at) {
                $user->email_verified_at = Carbon::now();
                $user->code_verified_at = null;
                $user->save();
                Mail::to($user->email)->send(new WelcomeEmail($apprenant));
                return $this->sendResponse($user, 'User verified successfully.');
            } else {
                return $this->sendError('Error', 'Code incorrect');
            }
        } catch (Exception $e) {
            return $this->sendError('Error', $e->getMessage());
        }

    }

    public function ResendEmailVerify(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $user = User::where('email', $request->email)->first();
           if($user){
            $user->code_verified = rand(000000, 999999);
            $user->save();
            Mail::to($user->email)->send(new EmailVerify($user));
            return $this->sendResponse($user, 'User verified successfully.');
           }
           else{
            return $this->sendError('Error', 'Email incorrect');
           }
        } catch (Exception $e) {
            return $this->sendError('Error', $e->getMessage());
        }
    }
    public function ResetPassWord(Request $request) {
        $validate = Validator::make($request->all(),[
            'email' => 'required|email',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $user = User::where('email', $request->email)->first();
            if(!$user){
                return $this->sendError('Error', 'Email incorrect');
            }
            $input = $request->all();
            $input['token'] = Str::random(250);
            PasswordReset::create($input);
            Mail::to($user->email)->send(new ResetPasswordEmail($input['token']));
        }
        catch (Exception $e) {
            return $this->sendError('Error', $e->getMessage());
        }

    }
    public function ResetPassWordConfirm(Request $request) {
        $validate = Validator::make($request->all(),[
            'token' => 'required',
            'password' => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $passwordReset = PasswordReset::where('token', $request->token)->first();
            if(!$passwordReset){
                return $this->sendError('Error', 'Token incorrect');
            }
            $user = User::where('email', $passwordReset->email)->first();
            $user->password = Hash::make($request->password);
            $user->save();
            return $this->sendResponse($user, 'Password reset successfully.');
            
        }
        catch (Exception $e) {
            return $this->sendError('Error', $e->getMessage());
        }

    }

    public function UpdatePassword(Request $request) {
        $validate = Validator::make($request->all(),[
            'old_password' => 'required',
            'password' => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $user = User::where('email', $request->user()->email)->first();
            if(Hash::check($request->old_password, $user->password)){
                $user->password = Hash::make($request->password);
                $user->save();
                return $this->sendResponse($user, 'User updated successfully.');
            }
            else{
                return $this->sendError('Error', 'Old password incorrect');
            }
        }
        catch (Exception $e) {
            return $this->sendError('Error', $e->getMessage());
        }

    }

    public function generatePassword( Request $request ,User $user)
    {
       try {
        $password = Str::random(8);
        $user->password = Hash::make($password);
        $user->save();
        Mail::to($user->email)->send(new NewPassWordEmaill($password));
        return $this->sendResponse($password, 'Password generated successfully.');
       }
       catch (Exception $e) {
        return $this->sendError('Error', $e->getMessage());



    }
    }





    
}
