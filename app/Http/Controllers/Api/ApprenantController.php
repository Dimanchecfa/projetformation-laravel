<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Apprenant;
use App\Models\Programme;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ApprenantController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $apprenants = Apprenant::with(
                'programme',
                'programme.formations'
            )->get();
            return $this->sendResponse(
                $apprenants,
                'Apprenants retrieved successfully.'
            );
        } catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'telephone' => 'required',
            'sexe' => 'required',
            'niveau_etude' => 'required',
            'numero_identite_type' => 'required',
            'numero_identite' => 'required',
            'date_delivrance' => 'required',
            'date_expiration' => 'required',
            'adresse' => 'required',
            'ville' => 'required',
            'programme_id' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Validation Error.', $validate->errors());
        }
        try {
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $apprenant = Apprenant::create($request->all());
            $user = new User();
            $user->nom = $request->nom;
            $user->prenom = $request->prenom;
            $user->role = 'apprenant';
            $user->email = $request->email;
            $user->password = bcrypt('12345678');
            $user->save();
            $programme = Programme::find($request->programme_id);
            $programme->nombre_apprenant = $programme->nombre_apprenant + 1;
            $programme->save();
            return $this->sendResponse(
                $apprenant,
                'Apprenant created successfully.'
            );
        } catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Apprenant  $apprenant
     * @return \Illuminate\Http\Response
     */
    public function show(Apprenant $apprenant)
    {
        try {
            if (is_null($apprenant)) {
                return $this->sendResponse($apprenant, 'Apprenant not found.');
            }
            $apprenant = Apprenant::with('programme', 'programme.formations')
                ->where('uuid', $apprenant->uuid)
                ->first();
            return $this->sendResponse(
                $apprenant,
                'Apprenant retrieved successfully'
            );
        } catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Apprenant  $apprenant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Apprenant $apprenant)
    {
        $validate = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'telephone' => 'required',
            'sexe' => 'required',
            'niveau_etude' => 'required',
            'numero_identite_type' => 'required',
            'numero_identite' => 'required',
            'date_delivrance' => 'required',
            'date_expiration' => 'required',
            'adresse' => 'required',
            'ville' => 'required',
            'programme_id' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Validation Error.', $validate->errors());
        }
        try {
            $apprenant->update($request->all());
            return $this->sendResponse(
                $apprenant,
                'Apprenant updated successfully.'
            );
        } catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Apprenant  $apprenant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Apprenant $apprenant)
    {
        try {
            $apprenant->delete();
            return $this->sendResponse(
                $apprenant,
                'Apprenant deleted successfully.'
            );
        } catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
}
