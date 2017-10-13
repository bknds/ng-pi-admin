import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
