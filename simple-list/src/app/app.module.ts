
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './material.module'

import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from 'src/app/modules/page-not-found/components/page-not-found/page-not-found.component'
import {HomeModule} from 'src/app/modules/home/home.module'
import {LoginModule} from 'src/app/modules/login/login.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
