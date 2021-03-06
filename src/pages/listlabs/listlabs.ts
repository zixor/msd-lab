import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";

@Component({
  selector: 'page-listlabs',
  templateUrl: 'listlabs.html',
})
export class ListlabsPage {

  private providers: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilitiesService: UtilitiesService) {
    this.providers = this.utilitiesService.getProviders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

}
