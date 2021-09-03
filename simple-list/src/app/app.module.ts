import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './material.module'

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
