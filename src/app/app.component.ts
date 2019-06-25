import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { ActionSheetController, AlertController, Events, IonTabs, MenuController,  ModalController, Platform, PopoverController
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// @ViewChild('tabs') tabs: IonTabs;
export class AppComponent {
  constructor(
    public events: Events,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appMinimize: AppMinimize,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public actionSheetCtrl: ActionSheetController,
    public popoverCtrl: PopoverController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    // 按下后退，执行最小化操作
    this.platform.backButton.subscribe(() => {
     // this.appMinimize.minimize();
   });
  }

  async androidBackButtonHandle() {
    try {
        const alert = await this.alertCtrl.getTop();
        if (alert) {
            alert.dismiss();
            return;
        }
        const action = await this.actionSheetCtrl.getTop();
        if (action) {
            action.dismiss();
            return;
        }
        const popover = await this.popoverCtrl.getTop();
        if (popover) {
            popover.dismiss();
            return;
        }
        const modal = await this.modalCtrl.getTop();
        if (modal) {
            modal.dismiss();
            return;
        }
        const isOpen = await this.menuCtrl.isOpen();
        if (isOpen) {
            this.menuCtrl.close();
            return;
        }
        // if (!this.tabsCanGoBack && !this.tabsParentCanGoBack) {
        //     this.native.appMinimize();
        //     return;
        // }
    } catch (error) {
    }
}
}
