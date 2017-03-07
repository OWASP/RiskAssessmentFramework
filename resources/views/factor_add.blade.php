@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header witd-border">
                    <h3 class="box-title">Add Factor</h3>
                </div>
                <form class="form-horizontal" action="{{ URL::to('/factor/add') }}" method="post">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    <div class="box-body">
                        <div class="form-group">
                            <label for="host_name" class="col-sm-2 control-label">Host Name</label>
                            <div class="col-sm-9">
                                <select name="host_name" class="form-control" id="host_name" required>
                                    <option value="">- Select host name -</option>
                                    @if ($host != null)
                                        @foreach($host as $item)
                                            <option value="{{ $item->id_host }}">{{ $item->host_name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>
                        @if ($category != null)
                            @foreach($category as $item)
                                <h3>{{ $item->category_name }}</h3>
                                <table class="table table-striped" style="margin-bottom: 20px">
                                    <tr>
                                        <td style="text-align: center">Skill level</td>
                                        <td style="text-align: center">Motive</td>
                                        <td style="text-align: center">Opportunity</td>
                                        <td style="text-align: center">Size</td>
                                        <td style="text-align: center">Ease of discovery</td>
                                        <td style="text-align: center">Ease of exploit</td>
                                        <td style="text-align: center">Awareness</td>
                                        <td style="text-align: center">Intrusion detection</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select name="skill_level_{{ $item->id_category }}" class="form-control" id="skill_level">
                                                <option value="0">0</option>
                                                <option value="1">1 - no technical skills</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - some technical skills</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - advanced computer user</option>
                                                <option value="6">6 - network and programming skills</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - security penetration skills</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="motive_{{ $item->id_category }}" class="form-control" id="motive">
                                                <option value="0">0</option>
                                                <option value="1">1 - low or no reward</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4 - possible reward</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - high reward</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="opportunity_{{ $item->id_category }}" class="form-control" id="opportunity">
                                                <option value="0">0 - full access or expensive resources required</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4 - special access or resources required</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - some access or resources required</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - no access or resources required</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="size_{{ $item->id_category }}" class="form-control" id="size">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2 - developers, system administrators</option>
                                                <option value="3">3</option>
                                                <option value="4">4 - intranet users</option>
                                                <option value="5">5 - partners</option>
                                                <option value="6">6 - authenticated users</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - anonymous Internet users</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="ease_discovery_{{ $item->id_category }}" class="form-control" id="ease_discovery">
                                                <option value="0">0</option>
                                                <option value="1">1 - practically impossible</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - difficult</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - easy</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - automated tools available</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="ease_exploit_{{ $item->id_category }}" class="form-control" id="ease_exploit">
                                                <option value="0">0</option>
                                                <option value="1">1 - theoretical</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - difficult</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - easy</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - automated tools available</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="awareness_{{ $item->id_category }}" class="form-control" id="awareness">
                                                <option value="0">0</option>
                                                <option value="1">1 - Unknown</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4 - hidden</option>
                                                <option value="5">5</option>
                                                <option value="6">6 - obvious</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - public knowledge</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="intrusion_detection_{{ $item->id_category }}" class="form-control" id="intrusion_detection">
                                                <option value="0">0</option>
                                                <option value="1">1 - active detection in application</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - logged and reviewed</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8 - logged without review</option>
                                                <option value="9">9 - not logged</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center">Loss of confidentiality</td>
                                        <td style="text-align: center">Loss of integrity</td>
                                        <td style="text-align: center">Loss of availability</td>
                                        <td style="text-align: center">Loss of accountability</td>
                                        <td style="text-align: center">Financial damage</td>
                                        <td style="text-align: center">Reputation damage</td>
                                        <td style="text-align: center">Non-compliance</td>
                                        <td style="text-align: center">Privacy violation</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select name="loss_confidentiality_{{ $item->id_category }}" class="form-control" id="loss_confidentiality">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2 - minimal non-sensitive data disclosed </option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6 - minimal critical data disclosed, extensive non-sensitive data disclosed</option>
                                                <option value="7">7 - extensive critical data disclosed</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - all data disclosed</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="loss_integrity_{{ $item->id_category }}" class="form-control" id="loss_integrity">
                                                <option value="0">0</option>
                                                <option value="1">1 - minimal slightly corrupt data</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - minimal seriously corrupt data</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - extensive slightly corrupt data</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - extensive seriously corrupt data</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - all data totally corrupt</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="loss_availability_{{ $item->id_category }}" class="form-control" id="loss_availability">
                                                <option value="0">0</option>
                                                <option value="1">1 - minimal secondary services interrupted</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - minimal primary services interrupted, extensive secondary services interrupted</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - primary services interrupted</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - all services completely lost</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="loss_accountability_{{ $item->id_category }}" class="form-control" id="loss_accountability">
                                                <option value="0">0</option>
                                                <option value="1">1 - fully traceable</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - possibly traceable </option>
                                                <option value="8">8</option>
                                                <option value="9">9 - completely anonymous</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="financial_damage_{{ $item->id_category }}" class="form-control" id="financial_damage">
                                                <option value="0">0</option>
                                                <option value="1">1 - less than the cost to fix the vulnerability </option>
                                                <option value="2">2</option>
                                                <option value="3">3 - minor effect on annual profit</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - significant effect on annual profit</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - bankruptcy</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="reputation_damage_{{ $item->id_category }}" class="form-control" id="reputation_damage">
                                                <option value="0">0</option>
                                                <option value="1">1 - minimal damage</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4 - loss of major accounts</option>
                                                <option value="5">5 - loss of goodwill</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - brand damage</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="non_compliance_{{ $item->id_category }}" class="form-control" id="non_compliance">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2 - minor violation</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - clear violation</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - high profile violation</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select name="privacy_voilation_{{ $item->id_category }}" class="form-control" id="privacy_voilation">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3 - one individual</option>
                                                <option value="4">4</option>
                                                <option value="5">5 - hundreds of people</option>
                                                <option value="6">6</option>
                                                <option value="7">7 - thousands of people</option>
                                                <option value="8">8</option>
                                                <option value="9">9 - millions of people</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            @endforeach
                        @endif
                        <div class="row" style="margin-top: 10px">
                            <div class="form-group">
                                <span class="col-sm-2"></span>
                                <button type="submit" class="btn btn-info col-sm-4">Save</button>
                                <button type="button" onclick="history.back(-1)" class="btn btn-default col-sm-4">Cancel</button>
                                <span class="col-sm-2"></span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop