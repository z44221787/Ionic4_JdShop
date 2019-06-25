// 第三方模块导出  统一管理
export { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

// Cordova模块
import { CordovaModule } from './cordovamodule';

@NgModule({
    imports: [],
    exports: [
        // CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        // NG-ZORRO-MOBILE 模块
        NgZorroAntdMobileModule,
        CordovaModule
    ],
    providers: []
})
export class SharedBaseModule { }
