import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { ToolsComponent } from './view/tools/tools.component';
import { HistoryComponent } from './view/history/history.component';
import { ResourcesComponent } from './view/resources/resources.component';
import { SettingsComponent } from './view/settings/settings.component';
import { ProfileComponent } from './view/profile/profile.component';
import { SupportComponent } from './view/support/support.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Top10Component } from './view/tools/top10/top10.component';
import { AuthService } from './auth/auth.service';
import { NavigationComponent } from './view/navigation/navigation.component';
import { DialogComponentComponent } from './view/resources/dialog-component/dialog-component.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './view/registration/registration.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolsComponent,
    HistoryComponent,
    ResourcesComponent,
    SettingsComponent,
    ProfileComponent,
    SupportComponent,
    Top10Component,
    NavigationComponent,
    DialogComponentComponent,
    RegistrationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule



  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
