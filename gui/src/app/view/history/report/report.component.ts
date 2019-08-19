import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Jan', weight: 1, symbol: 'H' },
  { position: 2, name: 'Feb', weight: 4, symbol: 'He' },
  { position: 3, name: 'March', weight: 6, symbol: 'Li' },
  { position: 4, name: 'April', weight: 9, symbol: 'Be' },
  { position: 5, name: 'May', weight: 10, symbol: 'B' },
  { position: 6, name: 'June', weight: 12, symbol: 'C' },
  { position: 7, name: 'July', weight: 14, symbol: 'N' },
  { position: 8, name: 'Aug', weight: 15, symbol: 'O' },
  { position: 9, name: 'Sep', weight: 18, symbol: 'F' },
  { position: 10, name: 'Oct', weight: 20, symbol: 'Ne' },
];
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = ELEMENT_DATA;


  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
