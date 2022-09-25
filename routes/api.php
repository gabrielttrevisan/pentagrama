<?php

use App\Http\Controllers\City\CityPageController;
use App\Http\Controllers\City\CityPaginationInfoController;
use App\Http\Controllers\City\CityStoreController;
use App\Http\Controllers\City\NeighborhoodStoreController;
use App\Http\Controllers\User\UserInfoController;
use App\Http\Controllers\User\UserSigInController;
use App\Http\Controllers\User\UserSignUpController;
use App\Http\Controllers\User\UserSigOutController;
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

Route::prefix('city')->name('api.city')->group(function () {
    Route::post('/', CityStoreController::class)->name('.store');
    Route::post('/{id}/neighborhood', NeighborhoodStoreController::class)->name('.store.neighborhood');
    Route::get('/pagination', CityPaginationInfoController::class)->name('.pagination');
    Route::get('/page', CityPageController::class)->name('.page');
});
