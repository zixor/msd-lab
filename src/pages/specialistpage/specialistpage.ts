import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";
import { ListchatsPage } from "../listchats/listchats";

@Component({
  selector: 'page-specialistpage',
  templateUrl: 'specialistpage.html',
})
export class SpecialistPage {

  private specialists: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilitiesService: UtilitiesService) {
    this.specialists = this.utilitiesService.getSpecialists();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

  edit(id) {
    this.navCtrl.push(ListchatsPage);
    console.log(id);
  }

  share() {

  }

  call(phoneNumber) {

  }

}