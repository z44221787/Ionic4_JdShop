import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 拨打电话服务
import { CallNumber } from '@ionic-native/call-number/ngx';

// 条码扫描服务
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// 微信服务
import { Wechat } from '@ionic-native/wechat/ngx';



@NgModule({
  declarations: [],
  exports: [ ],
  imports: [
    CommonModule
  ],
  providers: [
    CallNumber,
    BarcodeScanner,
    Wechat]
})
export class CordovaModule { }
