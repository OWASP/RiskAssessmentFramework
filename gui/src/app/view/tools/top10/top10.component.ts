import { OnInit, AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import '@vaadin/vaadin-upload';
import { FormControl, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {RestApiService} from '../../../shared/rest-api.service'
  

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


  constructor(private elementRef:ElementRef, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }
upload : any;
projectId : String;

 uploadFiles() {
    this.upload.uploadFiles();
    this.openBottomSheet("23232");
    console.log("upload complete");

     
  }


  openBottomSheet(projectId): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
      data: { projectId : projectId} },);
   
  }


  ngAfterViewInit() {
    var _this = this;
   this.upload =  this.elementRef.nativeElement.querySelector("vaadin-upload#manualUpload")
    this.upload.addEventListener('upload-response', function(event) {
      console.log('upload xhr after server response: ', event.detail.xhr);
console.log("STATUS",event.detail.xhr.status);
var response = JSON.parse(event.detail.xhr.response);
this.projectId = response.FILE_NAME; 
_this.openBottomSheet(this.projectId);
     if(event.detail.xhr.response.status!=200){
         event.detail.file.error = event.detail.xhr.response.error;


}
    });   
                          
  } 

  getProjectId(): String{
    return this.projectId;
   }




}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})

export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public restApi: RestApiService) {}
  projectId : any = this.data.projectId ;

  openLink(event: MouseEvent): void { 
    // var projectId = this.Top10Component.getProjectId();
     console.log("PROJECT ID" ,this.data.projectId);

    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
  scanProject():void{
    console.log("scanning", this.projectId);



    this.restApi.runScan(this.projectId).subscribe((data: any) => {
console.log(data);

  });
}

} 