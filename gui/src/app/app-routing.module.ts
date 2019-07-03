import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { HistoryComponent } from './view/history/history.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ResourcesComponent } from './view/resources/resources.component';
import { SettingsComponent } from './view/settings/settings.component';
import { SupportComponent } from './view/support/support.component';
import { ToolsComponent } from './view/tools/tools.component';

import { Top10Component } from './view/tools/top10/top10.component';
import { RegistrationComponent } from './view/registration/registration.component';
import { AuthGuardService } from './guards/auth-guard.service';
const routes: Routes = [
  {path : 'login', component:  LoginComponent},
  {path : 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path : 'history', component: HistoryComponent, canActivate: [AuthGuardService]},
  {path : 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path : 'resources', component : ResourcesComponent, canActivate: [AuthGuardService]},
  {path : 'settings', component : SettingsComponent, canActivate: [AuthGuardService]},
  {path : 'support', component : SupportComponent, canActivate: [AuthGuardService]},
  {path : 'tools', component : ToolsComponent, canActivate: [AuthGuardService]},
  {path : 'tools/top10', component : Top10Component, canActivate: [AuthGuardService]},
  {path : 'register', component : RegistrationComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
