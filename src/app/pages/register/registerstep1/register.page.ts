import { Component, OnInit, Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BasePage } from '../../../interface/base-page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BasePage implements OnInit {
  phoneType = '+86';
  telphoneNum = '';
  constructor(public injector: Injector, private navcontroller: NavController) {
      super(injector);
   }

  ngOnInit() {
  }

  /**
   * 下一步 跳转至接收验证码
   */
  nextstep() {
    if (this.telphoneNum === '') {
      this.toast('还未输入手机号！');
      return;
    }
    this.navcontroller.navigateForward('/register/step2', { queryParams: { telphoneNum: this.telphoneNum }});
  }

  //  联系客户人员
  contact() {
    this.call('13759446294').then( res => {} ).catch( err => {
       // tslint:disable-next-line:no-console
       console.info(err);
    });
  }

}
