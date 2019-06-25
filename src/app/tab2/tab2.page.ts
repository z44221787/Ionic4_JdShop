import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // 商品列表
  pList: any[] = [];

  // 商品分类列表
  pTypeList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // 初始化商品列表
    this.initPList();
    this.initPTypeList();
  }

  /**
   * 初始化商品列表
   */
  initPList(ptype?: string) {
    for ( let i = 1; i <= 12; i++) {
      this.pList.push({
        url: `/assets/list${i}.jpg`,
        title: `商品图片${i}`,
        href: ``
      });
    }
  }

  /**
   * 初始化商品类别
   */
  initPTypeList() {
    for ( let i = 1; i <= 100; i++) {
      this.pTypeList.push({
        title: `商品类别${i}`,
        href: ``
      });
    }
  }

}
