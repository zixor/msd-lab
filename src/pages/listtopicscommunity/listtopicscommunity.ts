import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listtopicscommunity',
  templateUrl: 'listtopicscommunity.html',
})
export class ListtopicscommunityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListtopicscommunityPage');
  }

}
