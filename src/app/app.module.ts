import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { IndexComponent } from "./pages/index/index.component";
import { PagesComponent } from "./pages/pages.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    PagesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}