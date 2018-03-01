import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Financeiro page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class Financeiro {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Financeiro');
  }

}
