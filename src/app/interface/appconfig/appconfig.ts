import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 配置系统基础常量
 */
export class Appconfig {

  // 设置整个平台特有样式 ios：苹果 |md: android
  static platformMode: any = 'ios';

  // 设置平台  通用返回按钮牛 文本内容
  static backButtonText = '返回';

}
