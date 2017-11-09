import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MenuItemComponent } from './components/menuItem/menuItem.component'
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HistoryPageComponent } from './components/historyPage/historyPage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaSiderbarComponent } from './components/paSiderbar/paSiderbar.component';

@NgModule({
  declarations: [
    PaSiderbarComponent,
    MenuComponent,
    BreadcrumbComponent,
    HistoryPageComponent
],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports:[
    PaSiderbarComponent,
    BreadcrumbComponent,
    HistoryPageComponent
  ]
})
export class SharedModule {
}
