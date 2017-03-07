@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-6">
            <div class="box">
                <div class="box-header">
                    <h3 style="text-align: center">Summary</h3>
                </div>
                <div class="box-body no-padding">
                    <table class="table table-striped" style="margin-bottom: 20px">
                        <tr>
                            <th style="width: 10%; text-align: center">#</th>
                            <th>Host Name</th>
                            <th style="width: 10%; text-align: center">Critical</th>
                            <th style="width: 10%; text-align: center">High</th>
                            <th style="width: 10%; text-align: center">Medium</th>
                            <th style="width: 10%; text-align: center">Low</th>
                            <th style="width: 10%; text-align: center">Note</th>
                        </tr>
                        @if(count($summary) > 0)
                            <?php
                            $hostname=[];$critical=[];$high=[];$medium=[];$low=[];$note=[];
                            $count=1;$t_all=0; $t_critical=0; $t_high=0; $t_medium=0; $t_low=0; $t_note=0 ?>
                            @foreach($summary as $item)
                                <tr>
                                    <td style=" text-align: center">{{ $count }}</td>
                                    <td>{{ $item->host_name }}</td>
                                    <td style="text-align: center">{{ $item->critical }}</td>
                                    <td style="text-align: center">{{ $item->high }}</td>
                                    <td style="text-align: center">{{ $item->medium }}</td>
                                    <td style="text-align: center">{{ $item->low }}</td>
                                    <td style="text-align: center">{{ $item->note }}</td>
                                </tr>
                                <?php
                                    $item_critical = (int) $item->critical;
                                    $item_high = (int) $item->high;
                                    $item_medium = (int) $item->medium;
                                    $item_low = (int) $item->low;
                                    $item_note = (int) $item->note;
                                    array_push($hostname, $item->host_name);
                                    array_push($critical, $item_critical);
                                    array_push($high, $item_high);
                                    array_push($medium, $item_medium);
                                    array_push($low, $item_low);
                                    array_push($note, $item_note);
                                    $count++;
                                    $t_critical +=$item->critical;
                                    $t_high +=$item->high;
                                    $t_medium +=$item->medium;
                                    $t_low +=$item->low;
                                    $t_note +=$item->note;
                                    $t_all = $t_critical+$t_high+$t_medium+$t_low+$t_note;
                                    ?>
                            @endforeach
                                <tr>
                                    <td></td>
                                    <td style="font-weight: bold">Total Vulnerability</td>
                                    <td style="font-weight: bold;text-align: center">{{ $t_critical }}</td>
                                    <td style="font-weight: bold;text-align: center">{{ $t_high }}</td>
                                    <td style="font-weight: bold;text-align: center">{{ $t_medium }}</td>
                                    <td style="font-weight: bold;text-align: center">{{ $t_low }}</td>
                                    <td style="font-weight: bold;text-align: center">{{ $t_note }}</td>
                                </tr>
                        @else
                            <tr>
                                <td colspan="7" style="text-align: center">No data available</td>
                            </tr>
                        @endif
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-6" style="padding-left: 0">
            <div class="box">
                <div class="box-body no-padding">
                    <div id="pie_chart" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-body no-padding">
                    <div id="bar_chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        @if(count($summary) > 0)
            $(function () {
            $(document).ready(function () {
                $('#pie_chart').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Vulnerability Assessment Ratio'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Ratio',
                        colorByPoint: true,
                        data: [{
                            name: 'Critical',
                            color: 'black',
                            y: {{ ($t_critical*100)/$t_all }}
                        }, {
                            name: 'High',
                            color: 'red',
                            y: {{ ($t_high*100)/$t_all }}
                        }, {
                            name: 'Medium',
                            color: 'yellow',
                            y: {{ ($t_medium*100)/$t_all }}
                        }, {
                            name: 'Low',
                            color: 'lightgreen',
                            y: {{ ($t_low*100)/$t_all }}
                        }, {
                            name: 'Note',
                            color: 'lightblue',
                            y: {{ ($t_note*100)/$t_all }}
                        }]
                    }]
                });
                $('#bar_chart').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Grafik Hasil Analisis Vulnerability Assessment terhadap 20 Website Jabarprov'
                    },
                    xAxis: {
                        categories: {!! json_encode($hostname) !!},
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: 'Summary'
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px; font-weight: bold">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Critical',
                        color: 'black',
                        data: {!! json_encode($critical) !!}
                    },{
                        name: 'High',
                        color: 'red',
                        data: {!! json_encode($high) !!}
                    },{
                        name: 'Medium',
                        color: 'yellow',
                        data: {!! json_encode($medium) !!}
                    },{
                        name: 'Low',
                        color: 'lightgreen',
                        data: {!! json_encode($low) !!}
                    },{
                        name: 'Note',
                        color: 'lightblue',
                        data: {!! json_encode($note) !!}
                    }]
                });
            });
        });
        @endif
    </script>
@stop
