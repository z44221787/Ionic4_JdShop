import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('slidesImg') slidesImg;
  public slidesImgs: any[] = new Array();
  public slidesGHList: any[] = [];
  public pList: any[] = [];
  public slidesGHListUlWidth = 0;
  public slideOpts = {
    autoplay: {
      delay: 5000,
    },
    speed: 400,
    loop: true
  };
  constructor() { }

  ngOnInit(): void {
    // 初始化数据加入轮播图片
    this.initSlides();
    // 初始化猜你喜欢商品
    this.initSlidesGuessHobby();
    // 初始化商品列表
    this.initPList();
  }

  /**
   * 初始化轮播图片
   */
  initSlides() {
    for ( let i = 1; i <= 3; i++) {
      this.slidesImgs.push({
        url: `/assets/slide0${i}.png`,
        title: `轮播图片${i}`,
        href: ``
      });
    }
  }

  /**
   * 初始化猜你喜欢图片
   */
  initSlidesGuessHobby() {
    let count = 0;
    for ( let i = 1; i <= 9; i++) {
      this.slidesGHList.push({
        url: `/assets/0${i}.jpg`,
        title: `猜你喜欢${i}`,
        href: ``
      });
      count++;
    }

    // 计算ul宽度
    this.slidesGHListUlWidth = count * 8;
  }

  /**
   * 初始化轮播图片
   */
  initPList() {
    for ( let i = 1; i <= 12; i++) {
      this.pList.push({
        url: `/assets/list${i}.jpg`,
        title: `商品图片${i}`,
        href: ``
      });
    }
  }

  SlideTouchEnd(e) {
    this.slidesImg.startAutoplay();
  }
}
