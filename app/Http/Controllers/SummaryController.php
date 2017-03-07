<?php

namespace App\Http\Controllers;

use App\Factor;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class SummaryController extends Controller
{
    public function index()
    {
        $summary = DB::select('SELECT host.host_name,
                                  (SELECT count(overall) FROM factor WHERE overall=\'note\' AND id_host=host.id_host) note,
                                  (SELECT count(overall) FROM factor WHERE overall=\'low\' AND id_host=host.id_host) low,
                                  (SELECT count(overall) FROM factor WHERE overall=\'medium\' AND id_host=host.id_host) medium,
                                  (SELECT count(overall) FROM factor WHERE overall=\'high\' AND id_host=host.id_host) high,
                                  (SELECT count(overall) FROM factor WHERE overall=\'critical\' AND id_host=host.id_host) critical
                            FROM host WHERE id_host IN  (SELECT id_host FROM factor)');

        return view('summary', compact('summary'));
    }
}
