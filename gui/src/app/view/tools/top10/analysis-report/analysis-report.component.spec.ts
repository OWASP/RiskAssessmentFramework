import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisReportComponent } from './analysis-report.component';

describe('AnalysisReportComponent', () => {
  let component: AnalysisReportComponent;
  let fixture: ComponentFixture<AnalysisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
