import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-exams-fragment',
  templateUrl: 'exams-fragment.html',
})
export class ExamsFragmentPage {

  private order = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsFragmentPage');
  }

}
