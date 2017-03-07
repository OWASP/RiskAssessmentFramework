<?php

namespace App\Http\Controllers;

use App\Category;
use App\Factor;
use App\Host;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FactorController extends Controller
{
    public function index()
    {
        $factor = Factor::all();
        return view('factor_list', compact('factor'));
    }

    public function add()
    {
        $host = Host::where('summary', null)->get();
        $category = Category::all();
        return view('factor_add', compact('category', 'host'));
    }

    public function store(Request $request)
    {
        $status = 0;
        $summary = '';
        $arr_overall = [];
        $id_host = $request->input('host_name');
        $category = Category::all();
        DB::beginTransaction();
        foreach($category as $item){
            $skill_level = $request->input('skill_level_'.$item->id_category);
            $motive = $request->input('motive_'.$item->id_category);
            $opportunity = $request->input('opportunity_'.$item->id_category);
            $size = $request->input('size_'.$item->id_category);
            $ease_discovery = $request->input('ease_discovery_'.$item->id_category);
            $ease_exploit = $request->input('ease_exploit_'.$item->id_category);
            $awareness = $request->input('awareness_'.$item->id_category);
            $intrusion_detection = $request->input('intrusion_detection_'.$item->id_category);
            $loss_confidentiality = $request->input('loss_confidentiality_'.$item->id_category);
            $loss_integrity = $request->input('loss_integrity_'.$item->id_category);
            $loss_availability = $request->input('loss_availability_'.$item->id_category);
            $loss_accountability = $request->input('loss_accountability_'.$item->id_category);
            $financial_damage = $request->input('financial_damage_'.$item->id_category);
            $reputation_damage = $request->input('reputation_damage_'.$item->id_category);
            $non_compliance = $request->input('non_compliance_'.$item->id_category);
            $privacy_voilation = $request->input('privacy_voilation_'.$item->id_category);

            $likelihood = ($skill_level + $motive + $opportunity + $size + $ease_discovery + $ease_exploit + $awareness + $intrusion_detection)/8;
            $overall_likelihood = '';
            if ($likelihood >= 0 AND $likelihood < 3){
                $overall_likelihood = 'low';
            }elseif($likelihood >= 3 AND $likelihood < 6){
                $overall_likelihood = 'medium';
            }elseif($likelihood >= 6 AND $likelihood <= 9){
                $overall_likelihood = 'high';
            }

            $impact = ($loss_confidentiality + $loss_integrity + $loss_availability + $loss_accountability + $financial_damage + $reputation_damage + $non_compliance + $privacy_voilation)/8;
            $overall_impact = '';
            if ($impact >= 0 AND $impact < 3){
                $overall_impact = 'low';
            }elseif($impact >= 3 AND $impact < 6){
                $overall_impact = 'medium';
            }elseif($impact >= 6 AND $impact <= 9){
                $overall_impact = 'high';
            }

            $overall = '';
            if ($overall_impact == 'high' AND $overall_likelihood=='low'){
                $overall = 'medium';
                $arr_overall[2] = $overall;
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='low'){
                $overall = 'low';
                $arr_overall[1] = $overall;
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='low'){
                $overall = 'note';
                $arr_overall[0] = $overall;
            }elseif ($overall_impact == 'high' AND $overall_likelihood=='medium'){
                $overall = 'high';
                $arr_overall[3] = $overall;
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='medium'){
                $overall = 'medium';
                $arr_overall[2] = $overall;
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='medium'){
                $overall = 'low';
                $arr_overall[1] = $overall;
            }elseif ($overall_impact == 'high' AND $overall_likelihood=='high'){
                $overall = 'critical';
                $arr_overall[4] = $overall;
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='high'){
                $overall = 'high';
                $arr_overall[3] = $overall;
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='high'){
                $overall = 'medium';
                $arr_overall[2] = $overall;
            }

            $factor = new Factor;
            $factor->id_host = $id_host;
            $factor->id_category = $item->id_category;
            $factor->skill_level = $skill_level;
            $factor->motive = $motive;
            $factor->opportunity = $opportunity;
            $factor->size = $size;
            $factor->ease_discovery = $ease_discovery;
            $factor->ease_exploit = $ease_exploit;
            $factor->awareness = $awareness;
            $factor->intrusion_detection = $intrusion_detection;
            $factor->loss_confidentiality = $loss_confidentiality;
            $factor->loss_integrity = $loss_integrity;
            $factor->loss_availability = $loss_availability;
            $factor->loss_accountability = $loss_accountability;
            $factor->financial_damage = $financial_damage;
            $factor->reputation_damage = $reputation_damage;
            $factor->non_compliance = $non_compliance;
            $factor->privacy_voilation = $privacy_voilation;
            $factor->impact = $overall_impact;
            $factor->likelihood = $overall_likelihood;
            $factor->overall = $overall;
            if ($factor->save()){
                $status = 1;
            }else{
                $status = 0;
            }
        }

        if (max(array_keys($arr_overall)) == 0){
            $summary = 'note';
        }
        if (max(array_keys($arr_overall)) == 1){
            $summary = 'low';
        }
        if (max(array_keys($arr_overall)) == 2){
            $summary = 'medium';
        }
        if (max(array_keys($arr_overall)) == 3){
            $summary = 'high';
        }
        if (max(array_keys($arr_overall)) == 4){
            $summary = 'critical';
        }

        $update_host = Host::where('id_host', $id_host)->update(['summary' => $summary]);

        if ($update_host){
            $status = 1;
        }else{
            $status = 0;
        }

        if ($status == 1){
            DB::commit();
            $request->session()->flash('status', 'success');
        }else{
            DB::rollback();
            $request->session()->flash('status', 'failed');
        }

        return redirect('/host');
        /*echo json_encode($arr_overall).'<br />';
        echo $summary;*/
    }

    public function update(Request $request, $id)
    {
        if ($_POST){
            $status = 0;
            DB::beginTransaction();
            $id_host = $request->input('_id_host');
            $skill_level = $request->input('skill_level');
            $motive = $request->input('motive');
            $opportunity = $request->input('opportunity');
            $size = $request->input('size');
            $ease_discovery = $request->input('ease_discovery');
            $ease_exploit = $request->input('ease_exploit');
            $awareness = $request->input('awareness');
            $intrusion_detection = $request->input('intrusion_detection');
            $loss_confidentiality = $request->input('loss_confidentiality');
            $loss_integrity = $request->input('loss_integrity');
            $loss_availability = $request->input('loss_availability');
            $loss_accountability = $request->input('loss_accountability');
            $financial_damage = $request->input('financial_damage');
            $reputation_damage = $request->input('reputation_damage');
            $non_compliance = $request->input('non_compliance');
            $privacy_voilation = $request->input('privacy_voilation');

            $likelihood = ($skill_level + $motive + $opportunity + $size + $ease_discovery + $ease_exploit + $awareness + $intrusion_detection)/8;
            $overall_likelihood = '';
            if ($likelihood >= 0 AND $likelihood < 3){
                $overall_likelihood = 'low';
            }elseif($likelihood >= 3 AND $likelihood < 6){
                $overall_likelihood = 'medium';
            }elseif($likelihood >= 6 AND $likelihood <= 9){
                $overall_likelihood = 'high';
            }

            $impact = ($loss_confidentiality + $loss_integrity + $loss_availability + $loss_accountability + $financial_damage + $reputation_damage + $non_compliance + $privacy_voilation)/8;
            $overall_impact = '';
            if ($impact >= 0 AND $impact < 3){
                $overall_impact = 'low';
            }elseif($impact >= 3 AND $impact < 6){
                $overall_impact = 'medium';
            }elseif($impact >= 6 AND $impact <= 9){
                $overall_impact = 'high';
            }

            $overall = '';
            if ($overall_impact == 'high' AND $overall_likelihood=='low'){
                $overall = 'medium';
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='low'){
                $overall = 'low';
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='low'){
                $overall = 'note';
            }elseif ($overall_impact == 'high' AND $overall_likelihood=='medium'){
                $overall = 'high';
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='medium'){
                $overall = 'medium';
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='medium'){
                $overall = 'low';
            }elseif ($overall_impact == 'high' AND $overall_likelihood=='high'){
                $overall = 'critical';
            }elseif ($overall_impact == 'medium' AND $overall_likelihood=='high'){
                $overall = 'high';
            }elseif ($overall_impact == 'low' AND $overall_likelihood=='high'){
                $overall = 'medium';
            }

            $factor_update = Factor::where('id_factor', $id)->update([
                'skill_level' => $skill_level,
                'motive' => $motive,
                'opportunity' => $opportunity,
                'size' => $size,
                'ease_discovery' => $ease_discovery,
                'ease_exploit' => $ease_exploit,
                'awareness' => $awareness,
                'intrusion_detection' => $intrusion_detection,
                'loss_confidentiality' => $loss_confidentiality,
                'loss_integrity' => $loss_integrity,
                'loss_availability' => $loss_availability,
                'loss_accountability' => $loss_accountability,
                'financial_damage' => $financial_damage,
                'reputation_damage' => $reputation_damage,
                'non_compliance' => $non_compliance,
                'privacy_voilation' => $privacy_voilation,
                'impact' => $overall_impact,
                'likelihood' => $overall_likelihood,
                'overall' => $overall
            ]);

            if ($factor_update){
                $status = 1;
            }else{
                $status = 0;
            }

            $summary = '';
            $get_overall = Factor::where('id_host', $id_host)->get()->lists('overall');
            for($i=0; $i<count($get_overall); $i++){
                if ($get_overall[$i] == 'note'){
                    $summary = 'note';
                    break;
                }
            }

            for($i=0; $i<count($get_overall); $i++){
                if ($get_overall[$i] == 'low'){
                    $summary = 'low';
                    break;
                }
            }

            for($i=0; $i<count($get_overall); $i++){
                if ($get_overall[$i] == 'medium'){
                    $summary = 'medium';
                    break;
                }
            }

            for($i=0; $i<count($get_overall); $i++){
                if ($get_overall[$i] == 'high'){
                    $summary = 'high';
                    break;
                }
            }

            for($i=0; $i<count($get_overall); $i++){
                if ($get_overall[$i] == 'critical'){
                    $summary = 'critical';
                    break;
                }
            }

            $update_host = Host::where('id_host', $id_host)->update(['summary' => $summary]);

            if ($update_host){
                $status = 1;
            }else{
                $status = 0;
            }

            if ($status){
                DB::commit();
                $request->session()->flash('status', 'success');
            }else{
                DB::rollback();
                $request->session()->flash('status', 'failed');
            }
            return redirect('/host');
        }else{
            $factor = Factor::where('id_factor', $id)
                ->join('host', 'host.id_host', '=', 'factor.id_host')
                ->join('category', 'category.id_category', '=', 'factor.id_category')
                ->first();
            return view('factor_update', compact('factor'));
        }
    }

    public function get_factor($id)
    {
        $factor = Factor::where('host.id_host', $id)
            ->join('category', 'category.id_category', '=', 'factor.id_category')
            ->join('host', 'host.id_host', '=', 'factor.id_host')
            ->get();

        return view('factor_list', compact('factor'));
    }
}