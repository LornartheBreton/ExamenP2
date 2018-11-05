import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TracksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracks',
  templateUrl: 'tracks.html',
})
export class TracksPage {
  tracks;
  album;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tracks=this.navParams.get('songs');
    this.album=this.navParams.get('album');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracksPage');
  }

}
