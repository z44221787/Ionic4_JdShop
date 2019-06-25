import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CordovaModule } from '../../interface/sharemodule/cordovamodule';

import { ComponentsPageModule } from '../../components/components.module';

import { RegisterPage } from './registerstep1/register.page';
import { Registerstep2Page } from './registerstep2/registerstep2.page';
import { Registerstep3Page } from './registerstep3/registerstep3.page';

@NgModule({
  declarations: [RegisterPage, Registerstep2Page, Registerstep3Page],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageModule,
    RegisterRoutingModule,
    CordovaModule
  ]
})
export class RegisterModule { }
