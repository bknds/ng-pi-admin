import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MenuItemComponent } from './components/menuItem/menuItem.component'
import { ElModule } from 'element-angular';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuComponent,
    BreadcrumbComponent
],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ElModule.forRoot(),
  ],
  exports:[
    MenuItemComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {
}
