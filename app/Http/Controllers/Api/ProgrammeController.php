<?php

namespace App\Http\Controllers\Api;

use App\Models\Programme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProgrammeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $programme = Programme::all()->load('formations');
            return $this->sendResponse($programme, 'Programmes retrieved successfully.');
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
            'libelle' => 'required',
            'description' => 'required',
        
        ]);
         if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->errors());       
          }
          try{
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $programme = Programme::create($input);
            return $this->sendResponse($programme, 'Programme created successfully.');
          }
            catch (\Exception $e) {
                return $this->sendError('Erreur', $e->getMessage());
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $programme = Programme::find($id);
            if (is_null($programme)) {
                return $this->sendError('Programme not found.');
            }
            return $this->sendResponse($programme, 'Programme retrieved successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'libelle' => 'required',
            'description' => 'required',
        
        ]);
         if($validate->fails()){
                return $this->sendError('Validation Error.', $validate->errors());       
          }
          try{
            $programme = Programme::find($id);
            if (is_null($programme)) {
                return $this->sendError('Programme not found.');
            }
            $programme->update($request->all());
            return $this->sendResponse($programme, 'Programme updated successfully.');
          }
            catch (\Exception $e) {
                return $this->sendError('Erreur', $e->getMessage());
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $programme = Programme::find($id);
            if (is_null($programme)) {
                return $this->sendError('Programme not found.');
            }
            $programme->delete();
            return $this->sendResponse($programme, 'Programme deleted successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
    
}
