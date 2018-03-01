import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Financeiro } from './financeiro';

@NgModule({
  declarations: [
    Financeiro,
  ],
  imports: [
    IonicPageModule.forChild(Financeiro),
  ],
})
export class FinanceiroModule {}
