import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StringSplitPipe } from './string-split.pipe';


@NgModule({
  declarations: [StringSplitPipe],
  exports: [StringSplitPipe],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class PipesPageModule {}
