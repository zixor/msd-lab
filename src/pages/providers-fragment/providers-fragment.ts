import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-providers-fragment',
  templateUrl: 'providers-fragment.html',
})
export class ProvidersFragmentPage {

  private order = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersFragmentPage');
  }

}
