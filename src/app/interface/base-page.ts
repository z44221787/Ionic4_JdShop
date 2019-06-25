import { Injectable, Injector, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ToastController, AlertController, LoadingController, ActionSheetController } from '@ionic/angular';

import { Appconfig } from './appconfig/appconfig';

import * as _ from 'lodash';

// cordova服务 ---需要倒入cordova共享模块
import { CallNumber } from '@ionic-native/call-number/ngx';

// 微信服务
import { Wechat } from '@ionic-native/wechat/ngx';

// rxjs
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Ionic 已经对某些属性定义方便书写代码 Button Input
import { AlertButton, AlertInput, ToastButton, Color, PredefinedColors } from '@ionic/core';

// nztd 模块服务
import { ToastService, ModalService, ActionSheetService, ShareOption } from 'ng-zorro-antd-mobile';

import { en_US, ru_RU, zh_CN, sv_SE, da_DK } from 'ng-zorro-antd-mobile';

@Injectable({
  providedIn: 'root'
})

/**
 * 页面基类（封装各种帮助类，和工具）
 */
export class BasePage {

  // Toast消息
  private toastController: ToastController;

  private Nztoast: ToastService;

  private NzModal: ModalService;
  // Alert弹出框
  private alertController: AlertController;



  // 加载层
  private loadingController: LoadingController;

  // Nztd ActionSheet
  private ActionSheet: ActionSheetService;

  private actionSheetController: ActionSheetController;

  // 用于存放多个loading,用于清楚
  private loadings: HTMLIonLoadingElement[] = [];


  //         cordova 服务
  // 拨打电话
  private callNumber: CallNumber;

  // 微信服务
  private wechat: Wechat;

  constructor(public injector: Injector) {
    if (this.injector) {
      this.toastController = this.injector.get<ToastController>(ToastController);
      this.NzModal = this.injector.get<ModalService>(ModalService);
      this.Nztoast = this.injector.get<ToastService>(ToastService);
      this.callNumber = this.injector.get<CallNumber>(CallNumber);
      this.alertController = this.injector.get<AlertController>(AlertController);
      this.loadingController = this.injector.get<LoadingController>(LoadingController);
      this.ActionSheet = this.injector.get<ActionSheetService>(ActionSheetService);
      this.actionSheetController = this.injector.get<ActionSheetController>(ActionSheetController);
      this.wechat = this.injector.get<Wechat>(Wechat);
    }
  }

  /**
   * Ionic-Toast 页脚步长提示消息
   * @param msg 消息
   * @param title 标题
   * @param color 样式颜色【默认：'dark'】
   * @param position 位置【默认：'bottom'】
   * @param buttons 按钮 【默认：[]】
   * @param mask 是否半透明 【默认:false】
   * @param duration 显示时间(毫秒)【默认：2000】
   */
  // tslint:disable-next-line:max-line-length
  async toastBase(msg: string, title: string, color: PredefinedColors = 'dark', position: 'top' | 'bottom' | 'middle' = 'bottom', buttons: ToastButton[] = [], mask: boolean = true, duration: number = 3000): Promise<void> {
    const toast = await this.toastController.create({
      color,
      header: title,
      position,
      buttons,
      message: msg,
      duration,
      translucent: mask
    });
    toast.present();
  }

  /**
   * Ionic-Toast 页脚步长提示消息
   * @param msg 消息
   * @param position 位置【默认：'bottom'】
   * @param color 样式颜色【默认：'dark'】
   * @param mask 是否半透明 【默认:false】
   * @param duration 显示时间(毫秒)【默认：2000】
   */
  // tslint:disable-next-line:max-line-length
  toast(msg: string, position: 'top' | 'bottom' | 'middle' = 'bottom', color: PredefinedColors = 'dark', mask: boolean = true, duration: number = 3000): Promise<void> {
    return this.toastBase(msg, '', color, position, [], false, duration);
  }


  /**
   * Nztd-Toast 显示信息 duration=0，需要调用toastClose关闭
   * @param msg 内容
   * @param position 位置 【默认：middle】
   * @param mask  是否显示透明蒙层，防止触摸穿透 【默认：false】
   * @param duration 显示时间【默认：2000】
   */
  toastInfo(msg: string, position: 'top' | 'bottom' | 'middle' = 'middle', mask: boolean = true, duration: number = 2000) {
    return new Promise<void>(sub => {
      this.Nztoast = ToastService.info(msg, duration, () => {
        sub();
      }, mask, position);
    });
  }

  /**
   * Nztd-Toast 显示成功 duration=0，需要调用toastClose关闭
   * @param msg 内容
   * @param position 位置 【默认：middle】
   * @param mask  是否显示透明蒙层，防止触摸穿透 【默认：false】
   * @param duration 显示时间【默认：2000】
   */
  // tslint:disable-next-line:max-line-length
  toastSuccess(msg: string, position: 'top' | 'bottom' | 'middle' = 'middle', mask: boolean = true, duration: number = 2000): Promise<void> {
    return new Promise<void>(sub => {
      this.Nztoast = ToastService.success(msg, duration, () => {
        sub();
      }, mask, position);
    });
  }

  /**
   * Nztd-Toast 显示错误 duration=0，需要调用toastClose关闭
   * @param msg 内容
   * @param position 位置 【默认：middle】
   * @param mask  是否显示透明蒙层，防止触摸穿透 【默认：false】
   * @param duration 显示时间【默认：2000】
   */
  // tslint:disable-next-line:max-line-length
  toastError(msg: string, position: 'top' | 'bottom' | 'middle' = 'middle', mask: boolean = true, duration: number = 2000): Promise<void> {
    // const toast = ToastService.fail('Load failed !!!', 1000);
    return new Promise<void>(sub => {
      this.Nztoast = ToastService.fail(msg, duration, () => {
        sub();
      }, mask, position);
    });
  }



  /**
   * Nztd-Toast 显示失败 duration=0，需要调用toastClose关闭
   * @param msg 内容
   * @param position 位置 【默认：middle】
   * @param mask  是否显示透明蒙层，防止触摸穿透 【默认：false】
   * @param duration 显示时间【默认：2000】
   */
  // tslint:disable-next-line:max-line-length
  toastfail(msg: string, position: 'top' | 'bottom' | 'middle' = 'middle', mask: boolean = true, duration: number = 2000) {
    return new Promise<void>(sub => {
      this.Nztoast = ToastService.offline(msg, duration, () => {
        sub();
      }, mask, position);
    });

  }



  /**
   * Nztd-Toast 显示加载 duration=0，需要调用toastClose关闭
   * @param msg 内容
   * @param position 位置 【默认：middle】
   * @param mask  是否显示透明蒙层，防止触摸穿透 【默认：false】
   * @param duration 显示时间【默认：0】
   */
  // tslint:disable-next-line:max-line-length
  toastloading(msg: string, position: 'top' | 'bottom' | 'middle' = 'middle', mask: boolean = true, duration: number = 0) {
    return new Promise<void>(sub => {
      this.Nztoast = ToastService.loading(msg, duration, () => {
        sub();
      }, mask, position);
    });
  }


  /**
   * 关闭 Nztd-Toast
   */
  toastClose() {
    ToastService.hide();
  }



  /**
   * 消息提示框
   * @param title  标题
   * @param msg 描述信息
   * @param subTitle  子标题
   * @param buttons  操作按钮import { AlertButton} from '@ionic/core';
   * @param inputs  录入控件 import { AlertInput} from '@ionic/core';
   * @param backdropDismiss 是否阴影关闭
   * @param Mode  设置平台特有样式 【默认：'ios'】
   */
  // tslint:disable-next-line:max-line-length
  async alertBase(title: string, msg: string, subTitle: string = '', buttons: Array<AlertButton> = [], inputs: Array<AlertInput> = [], backdropDismiss = false, Mode: any = Appconfig.platformMode): Promise<void> {
    if (!inputs || inputs === null) {
      inputs = [];
    }
    if (!buttons || buttons === null) {
      buttons = [];
    }
    const alert = await this.alertController.create({
      header: title,
      mode: Mode,
      subHeader: subTitle,
      message: msg,
      backdropDismiss,
      buttons,
      inputs,
    });
    await alert.present();
  }


  /**
   * 消息提示弹出框
   * @param title  标题
   * @param msg 描述信息
   * @param subTitle  子标题
   * @param Mode  设置平台特有样式 【默认：'ios'】
   * @returns Observable<any> 确定返回true
   */
  alert(title: string, msg?: string, subTitle: string = '', Mode: any = Appconfig.platformMode): Promise<void> {
    return this.alertBase(title, msg, subTitle, [
      {
        text: '关闭'
      }
    ], null, true, Mode);
  }

  /**
   * 确认提示对话框
   * @param title 标题 【默认:提示】
   * @param msg 描述信息
   * @param Mode 设置平台特有样式 【默认：'ios'】
   * @returns Observable<any> 确定返回true 取消返回false
   */
  alertConfirm(title: string, msg?: string, Mode: any = Appconfig.platformMode): Promise<any> {
    const stream = new Promise<any>(sub => {
      this.alertBase(title, msg, '', [
        {
          text: '确定',
          handler: () => {
            sub(true);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            sub(false);
          }
        }
      ], [], true, Mode);
    });

    return stream;
  }


  /**
   * 删除提示对话框
   * @param msg 描述信息
   * @param Mode 显示模式 showMode.ios | showMode.md 【默认:ios】
   * @returns Observable<any> 确定返回true
   */
  alertDelete(): Promise<any> {
    return this.alertConfirm('删除', '您是否确认删除');
  }


  // {title: string, onPress: (b?: any) => {}}
  /**
   * 弹出操作按钮窗体
   * @param operations 操作数组对象
   */
  alertOpeartion(...operations: any[]): Promise<any> {
    return new Promise<any>(resolve => {
      const ops: Array<{ text: string, onPress?: (b?: any) => void }> = [];
      if (operations.length > 0) {
        // 循环处理，加入promise根据text内容回调
        for (const item of operations) {
          ops.push({
            text: item,
            onPress: () => {
              resolve(item);
            }
          });
        }
      }
      ModalService.operation(ops);
    });
  }


  /**
   * 显示正在加载
   * @param title 显示内容
   * @param spinner 样式
   * @param translucent  是否半透明
   */
  // tslint:disable-next-line:max-line-length
  async LoadingShow(title: string, id?: string, spinner: 'bubbles' | 'circles' | 'crescent' | 'dots' | 'lines' | 'lines-small' | null | undefined = 'lines', translucent: boolean = true) {
    const loading: any = await this.loadingController.create({
      spinner,
      duration: 0,
      message: title,
      translucent,
    });
    if (id && id !== null && id !== '') {
      loading.id = id;
      this.loadings.push(loading);
    }
    return await loading.present();
  }

  /**
   * 关闭正在加载
   * @param id 需要关闭的loading层的id 【不写默认关闭最后弹出的loading】
   */
  LoadingClose(id?: string): Promise<void> {
    if (id) {
      const loadIndex = _.findIndex(this.loadings, o => {
        return o.id === id;
      });
      if (loadIndex >= 0) {
        this.loadings[loadIndex].dismiss();
        this.loadings.splice(loadIndex, 1);
      }
    } else {
      return this.loadingController.getTop().then(b => {
        b.dismiss();
        this.loadings = [];
      });
    }
  }

  /**
   * actionSheet 简单显示
   * @param buttons 按钮名称
   * @param title 标题 【默认:''】
   * @param destructiveButtonIndex 破坏性删除按钮索引默认标红(从0开始)【默认:null】
   * @param message 详情说明
   * @returns Promist<string> 返回点击的按钮文本
   */
  // tslint:disable-next-line:max-line-length
  actionSheetSimpleShow(buttons: string[], title: string = '', destructiveButtonIndex: number | null = null, message?: string, ): Promise<string> {
    return new Promise<string>(resolve => {
      buttons.push('取消');
      ActionSheetService.showActionSheetWithOptions(
        {
          options: buttons,
          cancelButtonIndex: buttons.length - 1,
          destructiveButtonIndex,
          title,
          message,
          maskClosable: true
        },
        buttonIndex => {
          if (buttonIndex !== -1 && buttonIndex !== (buttons.length - 1)) {
            resolve(buttons[buttonIndex]);
          }
        }
      );
    });
  }

  /**
   * 显示多行actionSheet
   * @param buttons ({icon: string | TemplateRef<any>,title:''}[])
   * @param message 消息
   */
  ActionSheetShareShow(buttons: ShareOption[] | ShareOption[][], message?: string): Promise<any> {
    return new Promise<any>(resolve => {
      ActionSheetService.showShareActionSheetWithOptions(
        {
          options: buttons,
          message
        },
        (buttonIndex, rowIndex) => {
          if (buttonIndex !== -1 && rowIndex !== -1) {
            const button = buttons[rowIndex][buttonIndex];
            if (button) {
              resolve(button.title);
            } else {
              const buttonn: any = buttons[buttonIndex];
              if (buttonn) {
                resolve(buttonn.title);
              }
            }
          }
        }
      );
    });
  }


  /**
   * 拨打电话
   */
  call(phoneNum: string): Promise<any> {
    return this.callNumber.callNumber(phoneNum, true);
  }


  /**
   * 微信分享功能
   * @param scene 0|1|2 默认0分享给朋友 1：分享到朋友圈
   * @param title 标题
   * @param description 描述信息
   * @param thumb 分享的图片
   * @param webpageUrl 分享的链接
   */
  wxShare(scene: 0|1|2 = 0   , title: string = '' , description: string= '' , thumb: string= '', webpageUrl: string= '') {
    // this.LoadingShow('正在分享到微信', 'wxshare001');
    try {
      this.wechat.isInstalled().then(res => {
        if (res) {
          this.toastInfo(JSON.stringify(res));
          this.wechat.share({
            message: {
              title, // 标题
              description: 'Message Description(optional)', // 描述
              mediaTagName: 'Media Tag Name(optional)', //
              thumb: 'http://YOUR_THUMBNAIL_IMAGE', // 分享图片
              media: {
                type: this.wechat.Type.WEBPAGE,   // webpage
                webpageUrl: 'https://github.com/xu-li/cordova-plugin-wechat'    // 分享链接
              }
            },
            scene: scene === 0 ? this.wechat.Scene.SESSION : this.wechat.Scene.TIMELINE // share to Timeline
          }).then(() => {
              this.toastInfo('微信分享成功');
          })
            .catch(error => {
              this.toastInfo('微信分享失败');
            });
        }
      }).catch(error => {
        this.toastInfo('未安装微信');
      });
    } catch (error) {
      this.toastInfo(error);
    } finally {
      // this.LoadingClose('wxshare001');
    }
  }




}
