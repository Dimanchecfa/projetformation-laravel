<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Seance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class SeanceController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $seance = Seance::with('formation')->get();
            return $this->sendResponse($seance, 'Seances retrieved successfully.');
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
        $validate = Validator::make($request->all(),[
           'date' => 'required',
            'heure_debut' => 'required',
            'heure_fin'=> 'required',
            'formation_id' => 'required'
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $seance = Seance::create($input);
            return $this->sendResponse($seance, 'Seance created successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Seance $seance
     * @return \Illuminate\Http\Response
     */
    public function show( Seance $seance)
    {
        try {
            $seance = Seance::with('formation')->find($seance->id);
            if (is_null($seance)) {
                return $this->sendError('Seance not found.');
            }
            return $this->sendResponse($seance, 'Seance retrieved successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Seance $seance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Seance $seance )
    {
        $validate = Validator::make($request->all() , [
            'date' => 'required',
            'heure_debut' => 'required',
            'heure_fin' => 'required' ,
            'formation_id' => 'required'
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $input = $request->all();
            $seance->update($input);
            return $this->sendResponse($seance , 'Seance modifie avec succes');
        }
        catch(\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Seance $seance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Seance $seance)
    {
        try {
            $seance->delete();
            return $this->sendResponse($seance, 'Seance deleted successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
}
