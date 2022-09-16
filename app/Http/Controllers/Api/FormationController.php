<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FormationController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $formation = Formation::with('programme' , 'formateur')->get();
            dd($formation);
            return $this->sendResponse($formation, 'Formations retrieved successfully.');
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
            'libelle' => 'required',
            'description' => 'required',
            'programme_id'=> 'required',
            'formateur_id' => 'required'
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try{
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $formation = Formation::create($input);
            return $this->sendResponse($formation, 'Formation created successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  Formation $formation
     * @return \Illuminate\Http\Response
     */
    public function show(Formation $formation)
    {
        try {
            $formation = Formation::with('programme')->find($formation->uuid);
            return $this->sendResponse($formation, 'Formation retrieved successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Formation $formation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formation $formation)
    {
        $validate = Validator::make($request->all() ,[
            'libelle' => 'required',
            'description' => 'required',
            'programme_id'=> 'required',
            'formateur_id' => 'required'
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try{
            $input = $request->all();
            $formation->update($input);
            return $this->sendResponse($formation, 'Formation updated successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Formation $formation
     * @return \Illuminate\Http\Response
     */
    public function destroy( Formation $formation)
    {
        try {
            $formation->delete();
            return $this->sendResponse($formation, 'Formation deleted successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
}
