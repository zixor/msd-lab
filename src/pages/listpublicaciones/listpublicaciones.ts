import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";

@Component({
  selector: 'page-listpublicaciones',
  templateUrl: 'listpublicaciones.html',
})
export class ListpublicacionesPage {

  private publishings: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilites: UtilitiesService) {
    this.publishings = utilites.getPublishings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpublicacionesPage');
  }

}
