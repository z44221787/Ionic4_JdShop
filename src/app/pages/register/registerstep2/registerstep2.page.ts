import { Component, OnInit, Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BasePage } from '../../../interface/base-page';

@Component({
  selector: 'app-registerstep2',
  templateUrl: './registerstep2.page.html',
  styleUrls: ['./registerstep2.page.scss'],
})
export class Registerstep2Page extends BasePage implements OnInit {
  code = '';
  constructor(public injector: Injector, private navcontroller: NavController) {
    super(injector);
 }

  ngOnInit() {
  }

   /**
    * 下一步 跳转至接收验证码
    */
  nextstep() {
    if (this.code === '') {
      this.toast('请输入您收到的验证码');
      return;
    }
    this.navcontroller.navigateForward('/register/step3', { queryParams: { code: this.code }});
  }

  /**
   * 重新发送验证码
   */
  resend() {
  }

  //  联系客户人员
  contact() {
    this.call('13759446294').then( res => {} ).catch( err => {
       // tslint:disable-next-line:no-console
       console.info(err);
    });
  }

}
