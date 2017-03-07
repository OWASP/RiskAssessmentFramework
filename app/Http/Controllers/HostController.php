<?php

namespace App\Http\Controllers;

use App\Host;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class HostController extends Controller
{
    public function index()
    {
        $host = Host::orderBy('summary', 'desc')->get();
        return view('host_list', compact('host'));
    }

    public function add()
    {
        return view('host_add');
    }

    public function store(Request $request)
    {
        $host_name = $request->input('host_name');

        $host = new Host;
        $host->host_name = $host_name;
        if ($host->save()){
            $request->session()->flash('status', 'success');
        }else{
            $request->session()->flash('status', 'failed');
        }

        return redirect('/host');
    }

    public function update(Request $request, $id)
    {
        if ($_POST){
            $host_name = $request->input('host_name');

            $host_update = Host::where('id_host', $id)->update(['host_name' => $host_name]);

            if ($host_update){
                $request->session()->flash('status', 'success');
            }else{
                $request->session()->flash('status', 'failed');
            }
            return redirect('/host');
        }else{
            $host = Host::where('id_host', $id)->first();
            return view('host_update', compact('host'));
        }
    }

    public function delete(Request $request, $id)
    {
        $host_delete = Host::where('id_host', $id)->delete();
        if ($host_delete){
            $request->session()->flash('status', 'success');
        }else{
            $request->session()->flash('status', 'failed');
        }

        return redirect('/host');
    }
}
