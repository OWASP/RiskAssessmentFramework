<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();
        return view('category_list', compact('category'));
    }

    public function add()
    {
        return view('category_add');
    }

    public function store(Request $request)
    {
        $category_name = $request->input('category_name');

        $category = new Category;
        $category->category_name = $category_name;
        if ($category->save()){
            $request->session()->flash('status', 'success');
        }else{
            $request->session()->flash('status', 'failed');
        }

        return redirect('/category');
    }

    public function update(Request $request, $id)
    {
        if ($_POST){
            $category_name = $request->input('category_name');

            $category_update = Category::where('id_category', $id)->update(['category_name' => $category_name]);

            if ($category_update){
                $request->session()->flash('status', 'success');
            }else{
                $request->session()->flash('status', 'failed');
            }
            return redirect('/category');
        }else{
            $category = Category::where('id_category', $id)->first();
            return view('category_update', compact('category'));
        }
    }

    public function delete(Request $request, $id)
    {
        $category_delete = Category::where('id_category', $id)->delete();
        if ($category_delete){
            $request->session()->flash('status', 'success');
        }else{
            $request->session()->flash('status', 'failed');
        }

        return redirect('/category');
    }
}
