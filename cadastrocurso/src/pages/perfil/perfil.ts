import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Perfil page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

}
