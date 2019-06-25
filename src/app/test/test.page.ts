import { Component, OnInit, Injector, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { BasePage } from '../interface/base-page';
import { Appconfig } from '../interface/appconfig/appconfig';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { AlertInput } from '@ionic/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage extends BasePage implements OnInit {
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  state = {
    open: true
  };


  items = [
    {
      name: 'Angra dos Reis, Brazil',
      // tslint:disable-next-line:max-line-length
      description: 'Brazil’s visa waiver during the Olympics was a success for one big reason: it encouraged travel beyond the big cities. The tourism board hopes to bring back the waiver, and if you’re planning to take advantage, save time to visit Angra dos Reis, between Rio and São Paulo. This popular Brazilian vacation area is where cariocas go to escape the crowds. “It’s where many of the country’s elite have their beach villas,” says Martin Frankenberg of Matuete, who has access to several of these glamorous rentals. Big changes are coming to the region. In May, Brazilian chain Fasano will open a long-awaited 54-suite hotel in a complex that includes a marina, golf course, restaurants, and a spa. The design is striking, with elevated wooden buildings that look like they’re floating, all with open-air terraces and views of the forest and sea. And the government recently pledged $8 million to improve the infrastructure on Ilha Grande—an island that’s so popular that they’ve had to impose a daily limit on visitors. —Stephanie Wu',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479915553/angra-dos-reis-brazil-WTG2017.jpg?itok=damBsB9G',
    },
    {
      name: 'Belfast, Northern Ireland',
      // tslint:disable-next-line:max-line-length
      description: 'With a growing array of open-air bars, arts venues, and restaurants, Belfast is quickly becoming an attractive destination for travelers. Stay at the design-forward Bullitt Hotel (inspired by the Steve McQueen film), which opened in October with casual, well-appointed rooms and complimentary grab-and-go breakfast granola. Check out arts organization Seedhead, which runs street-art tours and hosts pop-up cabarets around the city. The Michelin-starred OX and EIPIC lead the fine-dining pack, but also visit Permit Room, with its internationally inspired breakfast and locally roasted coffee. Noteworthy new nightlife spots include the Muddlers Club, a stylish restaurant and cocktail bar in the trendy Cathedral Quarter, and Vandal, a graffiti-adorned pizza place that turns into a late-night club, on the top floor of a 17th-century pub.—Nell McShane Wulfhart',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1480711606/belfast-city-hall-northern-ireland-WTG2017.jpg?itok=mCqumH31',
    }
  ];

  treeData = [
    {
      code: '1',
      label: 'Gundam',
      nodes: [
        {
          code: '101',
          label: '机动战士高达seed',
          nodes: [
            {
              code: '10101',
              label: '强袭高达'
            },
            {
              code: '10102',
              label: '自由高达'
            }
          ]
        },
      ]
    },
    {
      code: '2',
      label: 'EVA',
      nodes: [
        {
          code: '101',
          label: '机动战士高达seed',
          nodes: [
            {
              code: '10101',
              label: '强袭高达'
            },
            {
              code: '10102',
              label: '自由高达'
            }
          ]
        },
      ]
    }
  ];
  constructor(public injector: Injector, public cdr: ChangeDetectorRef) {
    super(injector);
  }

  ngOnInit() {
  }

  successToast() {
      this.wxShare(0, '分享功能测试', '', '', 'http://www.baidu.com');
  }
}
