import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";
import { CongressdetailPage } from "../congressdetail/congressdetail";

@Component({
  selector: 'page-congresos-medicos-list',
  templateUrl: 'congresos-medicos-list.html',
})
export class CongresosMedicosListPage {

  private congress: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilitiesService: UtilitiesService) {
    this.congress = this.utilitiesService.getCongress();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

  showDetail(){
    this.navCtrl.push(CongressdetailPage);
  }

}
