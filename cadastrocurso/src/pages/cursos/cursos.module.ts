import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cursos } from './cursos';

@NgModule({
  declarations: [
    Cursos,
  ],
  imports: [
    IonicPageModule.forChild(Cursos),
  ],
})
export class CursosModule {}
