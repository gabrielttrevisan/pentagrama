<?php

use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\UserSigInController;
use App\Http\Controllers\UserSignUpController;
use App\Http\Controllers\UserSigOutController;
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

Route::prefix('auth')->name('api.auth')->group(function () {
    Route::post('/sign-in', UserSigInController::class)->name('.signIn');
    Route::post('/sign-out', UserSigOutController::class)->name('.signOut');
});

Route::prefix('user')->name('api.user')->group(function () {
    Route::get('/info', UserInfoController::class)->name('.info');
    Route::post('/sign-up', UserSignUpController::class)->name('.signUp');
});
