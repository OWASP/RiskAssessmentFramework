<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header">
                <h3>Factor: {{ $factor[1]->host_name }} Host</h3>
            </div>
            <div class="box-body table-responsive no-padding">
                <table class="table table-striped" style="margin-bottom: 20px;">
                    <tr>
                        <th style="width: 10%; text-align: center; vertical-align: middle">#</th>
                        <th style="vertical-align: middle">Category</th>
                        <th>Overall Impact</th>
                        <th>Overall Likelihood</th>
                        <th style="vertical-align: middle">Overall</th>
                        <th style="width: 20%; text-align: center;vertical-align: middle">Action</th>
                    </tr>
                    @if($factor != null)
                        <?php $count = 1; ?>
                        @foreach($factor as $item)
                            <tr>
                                <td style="text-align: center; vertical-align: middle">{{ $count }}</td>
                                <td style="vertical-align: middle">{{ $item->category_name }}</td>
                                <td style="vertical-align: middle">{{ ucfirst($item->impact) }}</td>
                                <td style="vertical-align: middle">{{ ucfirst($item->likelihood) }}</td>
                                <td style="vertical-align: middle">{{ ucfirst($item->overall) }}</td>
                                <td style=" text-align: center">
                                    <a href="{{ URL::to('/factor/update/'.$item->id_factor) }}" class="btn btn-sm btn-warning" style="width: 100px">Update</a><br />
                                </td>
                            </tr>
                            <?php $count++; ?>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="3" style="text-align: center">No data available</td>
                        </tr>
                    @endif
                </table>
            </div>
        </div>
    </div>
</div>