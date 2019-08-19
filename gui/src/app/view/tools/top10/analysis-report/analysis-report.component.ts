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
  x: any;
  chartData: any = "";
  loadComplete = false;
  constructor(public restApi: RestApiService, @Inject(MAT_DIALOG_DATA) public data2: any) {
  }
  Project: any;


  A1 = 0;
  A2 = 0;
  A3 = 0;
  A4 = 0;
  A5 = 0;
  A6 = 0;
  A7 = 0;
  A8 = 0;
  A9 = 0;
  A10 = 0;
  others = 0;
  issueDetail: any;
  projectID: any;
  ngOnInit() {
    this.projectID = this.data2.projectId;
    console.log("Dialog pro id -= ", this.data2.projectId);

    this.restApi.getResults(this.projectID).subscribe((d: any) => {
      this.chartData = d;
      console.log("analysis data", d);
      this.chartData = d;
      this.loadComplete = true;
      let data = [];
      this.issueDetail = d.issues;
      data = d.tags;
      console.log("data is", d);
      let issues = data.map(data => {
        switch (data.type) {
          case ("owasp-a1"):
            this.A1 = data.issues;
            break;
          case ("owasp-a2"):
            this.A2 = data.issues;
            break;
          case ("owasp-a3"):
            this.A3 = data.issues;
            break;
          case ("owasp-a4"):
            this.A4 = data.issues;
            break;
          case ("owasp-a5"):
            this.A5 = data.issues;
            break;
          case ("owasp-a6"):
            this.A6 = data.issues;
            break;
          case ("owasp-a7"):
            this.A7 = data.issues;
            break;
          case ("owasp-a8"):
            this.A8 = data.issues;
            break;
          case ("owasp-a9"):
            this.A9 = data.issues;
            break;
          case ("owasp-a10"):
            this.A10 = data.issues;
            break;
          default: this.others = data.issues;
        }
      })
    });

  }

}
