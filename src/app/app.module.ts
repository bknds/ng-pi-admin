import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// 表单 双向数据绑定
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
// List中包含两个tab子组件
import { IndexComponent } from "./pages/index/index.component";
import { PagesComponent } from "./pages/pages.component";
// 定义路由, bootstrap默认加载组件就是AppComponent,所以他就是主页导航页,然后添加的路由都在他的模板中。

// 可以所有代码写在NgModule中, 也可以这样自定义常量,然后使用。

// 定义常量 嵌套自路由
const appChildRoutes: Routes = [
  { path: "index", component: IndexComponent },
  {
    path: '**', redirectTo: "index"
  }
];
// 定义常量 路由
const appRoutes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'pages',
    component: PagesComponent,
    children: appChildRoutes}
];
// 引用定义的路由
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
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