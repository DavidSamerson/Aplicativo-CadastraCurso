import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Cursos page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class Cursos {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cursos');
  }

}
