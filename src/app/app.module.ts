import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { PagesModule } from './pages/pages.module';
import { routing } from "./app.routing";
import { ComponentsModule } from './components/components.module';

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    ComponentsModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}