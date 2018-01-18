import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tratamiento-fragment',
  templateUrl: 'tratamiento-fragment.html',
})
export class TratamientoFragmentPage {

  private diagnostic = {};
  private order:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.order = navParams.data;
   if(this.order){
     this.diagnostic = this.order.diagnostic;
   }
    // console.log(this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TratamientoFragmentPage');
  }

}
