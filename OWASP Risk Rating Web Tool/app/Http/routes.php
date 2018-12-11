<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function(){
    return redirect('/summary');
});

Route::get('/host', 'HostController@index');
Route::get('/host/add', 'HostController@add');
Route::post('/host/add', 'HostController@store');
Route::get('/host/update/{id}', 'HostController@update');
Route::post('/host/update/{id}', 'HostController@update');
Route::get('/host/delete/{id}', 'HostController@delete');

Route::get('/category', 'CategoryController@index');
Route::get('/category/add', 'CategoryController@add');
Route::post('/category/add', 'CategoryController@store');
Route::get('/category/update/{id}', 'CategoryController@update');
Route::post('/category/update/{id}', 'CategoryController@update');
Route::get('/category/delete/{id}', 'CategoryController@delete');

Route::get('/factor', 'FactorController@index');
Route::get('/factor/add', 'FactorController@add');
Route::post('/factor/add', 'FactorController@store');
Route::get('/factor/update/{id}', 'FactorController@update');
Route::post('/factor/update/{id}', 'FactorController@update');
Route::get('/factor/get/{id}', 'FactorController@get_factor');

Route::get('/summary', 'SummaryController@index');