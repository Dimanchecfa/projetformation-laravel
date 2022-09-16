<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ModuleController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $module = Module::with('formation' , 'formation.programme')->get();
            return $this->sendResponse($module, 'Modules retrieved successfully.');
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
            'titre' => 'required',
            'description' => 'required',
            'formation_id'=> 'required',
            'formateur_id' => 'required'
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $module = Module::create($input);
            return $this->sendResponse($module, 'Module created successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Module $module
     * @return \Illuminate\Http\Response
     */
    public function show( Module $module)
    {
        try {
            $module = Module::with('formation')->find($module->id);
            return $this->sendResponse($module, 'Module retrieved successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Module $module
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Module $module)
    {
        $validate = Validator::make($request->all(),[
            'titre' => 'required',
            'description' => 'required',
            'formation_id'=> 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());       
        }
        try {
            $input = $request->all();
            $module->update($input);
            return $this->sendResponse($module, 'Module updated successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
   

    /**
     * Remove the specified resource from storage.
     *
     * @param  Module $module
     * @return \Illuminate\Http\Response
     */
    public function destroy( Module $module)
    {
        try {
            $module->delete();
            return $this->sendResponse($module, 'Module deleted successfully.');
        }
        catch (\Exception $e) {
            return $this->sendError('Erreur', $e->getMessage());
        }
    }
 
}
