import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner , private router: Router, private navController: NavController ) { }

  ngOnInit() {}


  openQrCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  /**
   * 跳转至搜索查询页面
   * @param e:查询文本参数
   */
  openSearchPage(e) {
    this.navController.navigateForward('/tabs/search', {queryParams: {id: e.target.value} });
  }
}
