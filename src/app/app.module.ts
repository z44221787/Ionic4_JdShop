import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

import { Appconfig } from './interface/appconfig/appconfig';

// 从根模块导入 NgZorroAntdMobileModule 所需所有模块---使整个应用程序都可使用
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
    mode: Appconfig.platformMode, // 全局默认样式定位IOS样式
    backButtonText: Appconfig.backButtonText   // 默认返回文本
  }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // 导入 ng-zorro-antd-mobile 模块
    NgZorroAntdMobileModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
