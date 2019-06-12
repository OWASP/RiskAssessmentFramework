import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material/';
import {MatCardModule,
   MatListModule, MatToolbarModule,
    MatFormFieldModule, MatInputModule,
     MatSidenavModule,
     MatProgressBarModule,
     MatDialogModule,

     MatExpansionModule} from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';








@NgModule({
    imports: [MatButtonModule, MatListModule,
       MatToolbarModule, MatSidenavModule,
       MatIconModule, MatFormFieldModule,
        MatCardModule, MatInputModule,
         AlertModule, MatGridListModule, MatExpansionModule,
         MatDialogModule, MatProgressBarModule  ],
    exports: [MatButtonModule, MatListModule,MatExpansionModule,
       MatToolbarModule, MatSidenavModule,
       MatIconModule, MatFormFieldModule,
       MatCardModule, MatInputModule, AlertModule, MatGridListModule,
       MatDialogModule, MatProgressBarModule ]

})

export class MaterialModule {}
