<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => '/users', 'as' => 'users.'], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/all', [UserController::class, 'all']);
    Route::get('/search', [UserController::class, 'search']);
    Route::put('/update', [UserController::class, 'updateUsers']);
});