import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './registerstep1/register.page';
import { Registerstep2Page } from './registerstep2/registerstep2.page';
import { Registerstep3Page } from './registerstep3/registerstep3.page';

const routes: Routes = [
  {path: 'step1', component: RegisterPage},
  {path: 'step2', component: Registerstep2Page},
  {path: 'step3', component: Registerstep3Page},
  {path: '**' , redirectTo: 'step1'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
