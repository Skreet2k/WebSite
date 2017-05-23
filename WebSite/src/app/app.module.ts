import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdMenuModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component"
import { LoginComponent } from "./login/login.component"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MdToolbarModule, MdMenuModule, MdButtonModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: "/",
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      { path: '**', component: LoginComponent }
    ]),
    NgbModule.forRoot()
  ],
  declarations: [AppComponent, RegisterComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
