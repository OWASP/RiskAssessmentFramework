import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material/';
import {
  MatCardModule,
  MatListModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDialogModule,


  MatExpansionModule
} from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';








@NgModule({
  imports: [MatButtonModule, MatListModule,
    MatToolbarModule, MatSidenavModule,
    MatIconModule, MatFormFieldModule,
    MatCardModule, MatInputModule, MatBottomSheetModule,
    AlertModule, MatTableModule, MatGridListModule, MatExpansionModule,
    MatDialogModule, MatProgressBarModule, ModalModule, WavesModule, InputsModule, ButtonsModule,
    ModalModule.forRoot()],
  exports: [MatButtonModule, MatListModule, MatExpansionModule,
    MatToolbarModule, MatSidenavModule,
    MatIconModule, MatFormFieldModule, MatBottomSheetModule,
    MatCardModule, MatTableModule, MatInputModule, AlertModule, MatGridListModule,
    MatDialogModule, MatProgressBarModule, ModalModule, WavesModule, InputsModule, ButtonsModule,],
  declarations: []

})

export class MaterialModule { }
