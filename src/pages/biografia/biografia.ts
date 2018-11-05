import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BiografiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biografia',
  templateUrl: 'biografia.html',
})
export class BiografiaPage {
  //bio={};
  imagen;
  artista;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagen=this.navParams.get('biografia');
    this.artista=this.navParams.get('artista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiografiaPage');
  }

}
