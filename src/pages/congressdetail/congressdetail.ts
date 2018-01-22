import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";

@Component({
  selector: 'page-congressdetail',
  templateUrl: 'congressdetail.html',
})
export class CongressdetailPage {

  private congressdetail: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilitiesService: UtilitiesService) {
    this.congressdetail = this.utilitiesService.getCongressDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

}
