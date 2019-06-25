import { Component, OnInit , Injector } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BasePage } from '../../interface/base-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage  implements OnInit {

  constructor(public injector: Injector , private Nav: NavController) {
     super(injector);
   }

  ngOnInit() {
  }

  goback() {
    this.Nav.back();
  }

  /**
   * 拨打客户电话
   */
  callClient() {
    this.call('13759446294')
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
