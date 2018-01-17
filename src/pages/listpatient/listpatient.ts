import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceOrderPage } from "../service-order/service-order";
import { UtilitiesService } from "../../providers/utilities.service";

@Component({
  selector: 'page-listpatient',
  templateUrl: 'listpatient.html',
})
export class ListpatientPage {

  private patients: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilitiesService: UtilitiesService) {
    this.patients = this.utilitiesService.getPatients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

  edit(id) {
    this.navCtrl.push(ServiceOrderPage, { "id": id });
    console.log(id);
  }

  share() {

  }

  call(phoneNumber) {

  }

}
