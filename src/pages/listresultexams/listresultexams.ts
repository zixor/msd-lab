import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listresultexams',
  templateUrl: 'listresultexams.html',
})
export class ListresultexamsPage {

 private order = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListresultexamsPage');
  }

}
