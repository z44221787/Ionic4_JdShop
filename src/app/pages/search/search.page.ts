import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { StringSplitPipe } from '../../pipes/string-split.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  // 检索关键字
  searchKeyWord = '';
  flag = true;
  pList = [] ; // 商品列表
  constructor(private activatedRoute: ActivatedRoute , private navController: NavController) { }

  ngOnInit() {
    //
    this.activatedRoute.queryParams.subscribe( (data: any) => {
       this.searchKeyWord = data;
       // tslint:disable-next-line:no-console
       console.info( this.searchKeyWord );
    });

    this.initPList();
  }

  goBack() {
    this.navController.back();
  }

  doSearch() {
    this.flag = false;
  }

  /**
   * 初始化模拟数据
   */
  initPList() {
   // tslint:disable-next-line:no-console
   for ( let i = 1; i <= 12; i++) {
      this.pList.push({
        url: `/assets/list${i}.jpg`,
        title: `春秋季时装周大量时尚商品卫衣夏季良品上衣外衣${i}`,
        href: ``
      });
    }
  }

}
