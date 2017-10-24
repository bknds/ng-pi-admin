import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu/menu.component'
import { ElModule } from 'element-angular';
@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ElModule.forRoot(),
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule {
}
