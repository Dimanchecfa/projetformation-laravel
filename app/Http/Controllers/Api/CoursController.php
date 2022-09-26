<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Cours;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class CoursController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $cours = Cours::all()->load('programme', 'formation', 'module');
            return $this->sendResponse($cours->toArray(), 'Cours retrieved successfully.');
        } catch (\Throwable $th) {
            return $this->sendError($th->getMessage());
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
            'uuid' => 'required',
            'programme_id' => 'required',
            'formation_id' => 'required',
            'module_id' => 'required',
            'titre' => 'required',
            'is_validated' => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());
        }

        try {
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $cours = Cours::create($input);
            return $this->sendResponse($cours , 'Formation created succefuuly');

        }
        catch(\Throwable $th) {
            return $this->sendError($th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Cours $cours
     * @return \Illuminate\Http\Response
     */
    public function show( Cours $cours)
    {
        try {
            $cours = Cours::find($cours->uuid)->load('programme', 'formation', 'module');
            return $this->sendResponse($cours, 'Cours retrieved successfully.');
        }
        catch (\Throwable $th) {
            return $this->sendError($th->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Cours $cours
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cours $cours)
    {
        $validate = Validator::make($request->all(), [
            'uuid' => 'required',
            'programme_id' => 'required',
            'formation_id' => 'required',
            'module_id' => 'required',
            'titre' => 'required',
            'is_validated' => 'required',
        ]);
        if($validate->fails()){
            return $this->sendError('Validation Error.', $validate->errors());
        }

        try {
            $input = $request->all();
            $cours = Cours::find($cours->uuid)->update($input);
            return $this->sendResponse($cours , 'Formation updated succefuuly');

        }
        catch(\Throwable $th) {
            return $this->sendError($th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Cours $cours
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cours $cours)
    {
       
        try {
            $cours = Cours::find($cours->uuid)->delete();
            return $this->sendResponse($cours, 'Cours deleted successfully.');
        }
        catch (\Throwable $th) {
            return $this->sendError($th->getMessage());
        }
    }
}
