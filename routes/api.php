<?php

use App\Http\Controllers\AnnonceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\ApprenantController;
use App\Http\Controllers\Api\FormateurController;
use App\Http\Controllers\Api\FormationController;
use App\Http\Controllers\Api\ModuleController;
use App\Http\Controllers\Api\ProgrammeController;
use App\Http\Controllers\Api\SeanceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('user', UserController::class);

Route::ApiResource('apprenant', ApprenantController::class);
Route::ApiResource('formateur', FormateurController::class);
Route::ApiResource('module' , ModuleController::class);
Route::ApiResource('formation' , FormationController::class);
Route::ApiResource('programme' , ProgrammeController::class);
Route::ApiResource('formateur' , FormateurController::class);
Route::ApiResource('seances' , SeanceController::class);

Route::post('/signup' , [AuthController::class , 'signup']);
Route::post('/signin' , [AuthController::class , 'signin']);
Route::post('/verify/email' , [AuthController::class , 'VerifyMail']);
Route::post('/verify/resend/email' , [AuthController::class , 'ResendEmailVerify']);
Route::post('/change/password' , [AuthController::class , ' updatePassword']);
Route::post('/reset/password' , [AuthController::class , 'ResetPassWord']);
Route::post('/reset/password/confirm' , [AuthController::class , 'ResetPassWordConfirm']);
