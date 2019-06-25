import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';

// 每个模块都需要倒入2个公共模块
// 1 组件模块
import { ComponentsPageModule } from '../components/components.module';
// 2 其他第三方组件模块 ---包含其他三方组件模块和Cordova服务配置模块
import { SharedBaseModule } from '../interface/sharemodule/SharedBaseModule';

const routes: Routes = [
  {
    path: '',
    component: TestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsPageModule,
    // 倒入其他模块
    SharedBaseModule
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
