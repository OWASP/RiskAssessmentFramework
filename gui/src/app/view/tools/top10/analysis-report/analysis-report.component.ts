import { Component, OnInit, Inject } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { DialogData } from 'src/app/view/resources/dialog-component/dialog-component.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-analysis-report',
  templateUrl: './analysis-report.component.html',
  styleUrls: ['./analysis-report.component.css']
})
export class AnalysisReportComponent implements OnInit {
  x :any;
  constructor(public restApi: RestApiService,@Inject(MAT_DIALOG_DATA) public data2: DialogData) {
   }
  fetchProjectResults(data) {
    console.log("dialog pro 2",data);
    return this.restApi.getResults(data);
  }
  ngOnInit() {
  }

}
