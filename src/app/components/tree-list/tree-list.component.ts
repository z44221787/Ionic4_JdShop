import { Component, EventEmitter, Input, Output, OnInit, AfterViewChecked } from '@angular/core';
import * as lodash from 'lodash';
@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
})
export class TreeListComponent implements OnInit, AfterViewChecked {

  // Input
  // 数据集
  @Input() treeData: any = {};
  // 初始选中的值
  @Input() initCode = '';
  // id的key
  @Input() codeText = 'code';
  // 值的key
  @Input() labelText = 'label';
  // 子节点的key
  @Input() nodesText = 'nodes';

  // Output
  @Output() handleSelect = new EventEmitter();

  firstTime = false;
  constructor() { }

  ngOnInit(): void {
    if (!this.firstTime) {
      if (this.treeData && this.treeData.length > 0) {
        this.firstTime = true;
        this.mapFindNodes(this.treeData);
      }
    }
   }

  ngAfterViewChecked(): void {
  }


  // 递归方式压入节点
  mapFindNodes(data) {
    lodash.map(data, (item: {[index: string]: any}) => {
      // tslint:disable-next-line:no-string-literal
      item['active'] = this.initCode && (this.initCode === item[this.codeText]);
      if (lodash.get(item, this.nodesText) && lodash.get(item, this.nodesText).length > 0) {
        // tslint:disable-next-line:no-string-literal
        item['isOpen'] = (this.initCode && this.initCode.substring(0, item[this.codeText].length)) === item[this.codeText];
        this.mapFindNodes(lodash.get(item, this.nodesText));
      }
    });
  }


  handleArrow(target) {
    target.isOpen = !target.isOpen;
    if (target && lodash.has(target, this.nodesText) && target[this.nodesText].length > 0) {
      this.mapFindNodes(target[this.nodesText]);
    }
  }

  // 选择最后的子Item
  handleLastItem(target) {
    this.handleSelect.emit(target);
  }



}
