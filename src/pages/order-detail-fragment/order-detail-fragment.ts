import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-detail-fragment',
  templateUrl: 'order-detail-fragment.html',
})
export class OrderDetailFragmentPage {

 private order = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailFragmentPage');
  }

}
