import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MenuItemComponent } from './menuItem/menuItem.component'
import { ElModule } from 'element-angular';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuItemComponent,
    MenuComponent
],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ElModule.forRoot(),
  ],
  exports:[
    MenuItemComponent
  ]
})
export class SharedModule {
}
