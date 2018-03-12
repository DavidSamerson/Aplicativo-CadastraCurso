
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CAlunos } from './../pages/c-alunos/c-alunos';
import { CCursos } from './../pages/c-cursos/c-cursos';
import { LAlunos } from '../pages/l-alunos/l-alunos';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav : Nav;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
   
  }
  
  chamaCA() : void {
    this.nav.push(CAlunos);
  }
  chamaCC() : void {
    this.nav.push(CCursos);
  }
  chamaLA() : void {
    this.nav.push(LAlunos);
  }
}
