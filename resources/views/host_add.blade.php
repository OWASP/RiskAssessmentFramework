@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Add Host</h3>
                </div>
                <form class="form-horizontal" method="post" action="{{ URL::to('/host/add') }}">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    <div class="box-body">
                        <div class="form-group">
                            <label for="host_name" class="col-sm-2 control-label">Host Name</label>
                            <div class="col-sm-9">
                                <input type="text" name="host_name" class="form-control" id="host_name" placeholder="Host" autofocus>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-info">Save</button>
                                <button type="button" onclick="history.back(-1)" class="btn btn-default">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop