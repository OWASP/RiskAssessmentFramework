@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Update Factor</h3>
                </div>
                <form class="form-horizontal" method="post" action="{{ URL::to('/factor/update/'.$factor->id_factor) }}">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    <input type="hidden" name="_id_host" value="{{ $factor->id_host }}">
                    <div class="box-body">
                        <div class="box-body">
                            <h3>Host Name: <strong>{{ $factor->host_name }}</strong></h3>
                            <h3>Category Name: <strong>{{ $factor->category_name }}</strong></h3>
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
                                        <select name="skill_level" class="form-control" id="skill_level">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->skill_level == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="motive" class="form-control" id="motive">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->motive == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="opportunity" class="form-control" id="opportunity">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->opportunity == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="size" class="form-control" id="size">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->size == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="ease_discovery" class="form-control" id="ease_discovery">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->ease_discovery == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="ease_exploit" class="form-control" id="ease_exploit">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->ease_exploit == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="awareness" class="form-control" id="awareness">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->awareness == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="intrusion_detection" class="form-control" id="intrusion_detection">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->intrusion_detection == $i) selected @endif>{{ $i }}</option>
                                            @endfor
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
                                        <select name="loss_confidentiality" class="form-control" id="loss_confidentiality">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->loss_confidentiality == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="loss_integrity" class="form-control" id="loss_integrity">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->loss_integrity == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="loss_availability" class="form-control" id="loss_availability">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->loss_availability == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="loss_accountability" class="form-control" id="loss_accountability">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->loss_accountability == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="financial_damage" class="form-control" id="financial_damage">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->financial_damage == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="reputation_damage" class="form-control" id="reputation_damage">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->reputation_damage == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="non_compliance" class="form-control" id="non_compliance">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->non_compliance == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                    <td>
                                        <select name="privacy_voilation" class="form-control" id="privacy_voilation">
                                            @for($i=0; $i<=9; $i++)
                                                <option value="{{ $i }}" @if ($factor->privacy_voilation == $i) selected @endif>{{ $i }}</option>
                                            @endfor
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <div class="row" style="margin-top: 10px">
                                <div class="form-group">
                                    <span class="col-sm-2"></span>
                                    <button type="submit" class="btn btn-info col-sm-4">Save</button>
                                    <button type="button" onclick="history.back(-1)" class="btn btn-default col-sm-4">Cancel</button>
                                    <span class="col-sm-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop