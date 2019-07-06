import { Component, OnInit } from '@angular/core';
import '@vaadin/vaadin-upload';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
   reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg)
,
  ]);
  constructor() { }

  ngOnInit() {
  }

}
