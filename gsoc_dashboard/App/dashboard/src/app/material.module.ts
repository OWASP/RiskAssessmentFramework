import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule} from '@angular/material/'
import {MatCardModule,MatListModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSidenavModule} from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';






@NgModule({
    imports:[MatButtonModule,MatListModule,MatToolbarModule,MatSidenavModule, MatIconModule,MatFormFieldModule, MatCardModule, MatInputModule,AlertModule ],
    exports:[MatButtonModule,MatListModule,MatToolbarModule,MatSidenavModule, MatIconModule, MatFormFieldModule, MatCardModule, MatInputModule,AlertModule ]

})

export class MaterialModule{}
