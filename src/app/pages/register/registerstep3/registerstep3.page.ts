import { Component, OnInit, Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BasePage } from '../../../interface/base-page';

@Component({
  selector: 'app-registerstep3',
  templateUrl: './registerstep3.page.html',
  styleUrls: ['./registerstep3.page.scss'],
})
export class Registerstep3Page extends BasePage implements OnInit {
  changePwdview = false; // 默认密码不可见
  pwdInputType = 'password';
  password = '';
  constructor(public injector: Injector , private navcontroller: NavController) {
    super(injector);
  }

  ngOnInit() {
  }

  changePwdView() {
    if (this.changePwdView) {
      this.changePwdview = false;
    } else {
      this.changePwdview = true;
    }
    this.pwdInputType = this.pwdInputType === 'password' ? 'text' : 'password';
  }

   /**
    * 下一步 跳转至接收验证码
    */
   nextstep() {
    if (this.password === '') {
      this.toast('请设置您的登陆密码');
      return;
    }
    this.navcontroller.navigateForward('/tabs/tab1');
  }

  //  联系客户人员
  contact() {
    this.call('13759446294').then( res => {} ).catch( err => {
       // tslint:disable-next-line:no-console
       console.info(err);
    });
  }

}
