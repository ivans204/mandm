<?php

use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/users', function () {
    $users = User::all();
    return view('user', ['users' => $users]);
});

Route::resource('user', UserController::class);
Route::get('export-csv', [UserController::class, 'exportCSV'])->name('export');