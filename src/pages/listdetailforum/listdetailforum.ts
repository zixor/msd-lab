import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listdetailforum',
  templateUrl: 'listdetailforum.html',
})
export class ListdetailforumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListdetailforumPage');
  }

}
