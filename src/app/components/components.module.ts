import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchComponent } from '../components/search/search.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GobackComponent } from './goback/goback.component';
import { AccordionListComponent } from './accordion-list/accordion-list';
import { TreeListComponent } from './tree-list/tree-list.component';

const routes: Routes = [
  {
    path: 'Search',
    component: SearchComponent,
  }
];

@NgModule({
  declarations: [SearchComponent, GobackComponent , AccordionListComponent, TreeListComponent ],
  exports: [SearchComponent, GobackComponent, AccordionListComponent, TreeListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [BarcodeScanner]
})
export class ComponentsPageModule {}
