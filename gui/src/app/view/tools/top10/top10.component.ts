import { OnInit, AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import '@vaadin/vaadin-upload';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from '../../../shared/rest-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AnalysisReportComponent } from './analysis-report/analysis-report.component';




@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  uploadFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg)


    ,
  ]);


  constructor(private elementRef: ElementRef, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }
  upload: any;
  projectId: String;

  uploadFiles() {
    this.upload.uploadFiles();
    this.openBottomSheet(this.projectId);
    console.log("upload complete");


  }


  openBottomSheet(projectId): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      data: { projectId: projectId }
    });

  }


  ngAfterViewInit() {
    var _this = this;
    this.upload = this.elementRef.nativeElement.querySelector("vaadin-upload#manualUpload")
    this.upload.addEventListener('upload-response', function (event) {
      var response = JSON.parse(event.detail.xhr.response);
      this.projectId = response.FILE_NAME;
      _this.openBottomSheet(this.projectId);
      if (event.detail.xhr.response.status != 200) {
        event.detail.file.error = event.detail.xhr.response.error;


      }
    });

  }

  getProjectId(): String {
    return this.projectId;
  }




}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})

export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public restApi: RestApiService, public dialog: MatDialog) { }
  projectId: any = this.data.projectId;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openDialog(): void {
    const _this = this;
    const dialogRef = this.dialog.open(AnalysisReportComponent, {
      width: '100%',
      height: "100%",
      maxHeight: "100%",
      maxWidth: "100%",
      data: {
        projectId: _this.data.projectId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  scanProject(): void {

    this.restApi.runScan(this.projectId).subscribe((data) => {

      this.displayReport(data);


    });
  }

  displayReport(data) {



  }

}
