import { Component,
   ElementRef,
   Input,
   Renderer,
   ViewChild , AfterViewInit , AfterContentInit, OnInit,
   ChangeDetectorRef} from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'accordion-list',
  templateUrl: 'accordion-list.html',
  styleUrls: ['./accordion-list.scss'],
})
export class AccordionListComponent implements OnInit, AfterViewInit {

  // 取默认ionic Button的颜色样式
  @Input() headerColor = 'danger';
  @Input() textColor = '#FFF';
  @Input() contentColor = '#F9F9F9';
  @Input() title: string;
  @Input() expanded: boolean;

  // 箭头指向
  arrowName = 'ios-arrow-down';

  @ViewChild('accordionContent') elementView: any;

  constructor(private cd: ChangeDetectorRef, public renderer: Renderer) { }

  ngOnInit(): void {
    if (!this.expanded) {
      this.arrowName = 'ios-arrow-forward';
    }
  }

  ngAfterViewInit() {

    if (!this.expanded) {
      this.renderer.setElementStyle(this.elementView.el, 'height', 0 + 'px');
    }
  }

  /**
   * 切换卡片
   */
  toggleAccordion() {
    this.expanded = !this.expanded;
    const newHeight = this.expanded ? '' : '0px';
    if (newHeight === '0px') {
      this.arrowName = 'ios-arrow-forward';
    } else {
      this.arrowName = 'ios-arrow-down';
    }
    this.renderer.setElementStyle(this.elementView.el, 'height', newHeight);

  }

}
