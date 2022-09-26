<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Formateur;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FormateurController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        try {
            $formateurs = Formateur::with('formations' , 'formations.programme' , 'formations.modules')->get();
            return $this->sendResponse($formateurs, 'Formateurs retrieved successfully.');
        }
        catch (\Exception $e) {
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
            'adresse' => 'required',
            'ville' => 'required',

        ]);
         if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->errors());
          }
          try{
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $formateur = Formateur::create($input);
            return $this->sendResponse($formateur, 'Formateur created successfully.');
          }
            catch (\Exception $e) {
                return $this->sendError('Erreur', $e->getMessage());
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Formateur  $formateur
     * @return \Illuminate\Http\Response
     */
    public function show( Formateur $formateur)
    {
        try {
            $formateur = Formateur::with('formations' , 'formations.programme')->where('uuid' , $formateur->uuid)->first();
            return $this->sendResponse($formateur, 'Formateur retrieved successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param    Formateur $formateur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formateur $formateur)
    {
        $validate = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'telephone' => 'required',
            'adresse' => 'required',
            'ville' => 'required',

        ]);
         if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->errors());
          }
          try{
            $input = $request->all();
            $formateur->update($input);
            return $this->sendResponse($formateur, 'Formateur updated successfully.');
          }
            catch (\Exception $e) {
                return $this->sendError('Erreur', $e->getMessage());
            }



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Formateur  $formateur
     * @return \Illuminate\Http\Response
     */
    public function destroy( Formateur $formateur)
    {
        try {
            $formateur->delete();
            return $this->sendResponse($formateur, 'Formateur deleted successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

}
