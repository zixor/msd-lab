import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";
import { OrderDetailFragmentPage } from "../order-detail-fragment/order-detail-fragment";
import { ProvidersFragmentPage } from "../providers-fragment/providers-fragment";
import { ExamsFragmentPage } from "../exams-fragment/exams-fragment";
import { TratamientoFragmentPage } from "../tratamiento-fragment/tratamiento-fragment";

@Component({
  selector: 'page-service-order',
  templateUrl: 'service-order.html',
})
export class ServiceOrderPage {

  private patients: any[] = [];
  private order = {};

  tab1Root: any = OrderDetailFragmentPage;
  tab2Root: any = ProvidersFragmentPage;
  tab3Root: any = ExamsFragmentPage;
  tab4Root: any = TratamientoFragmentPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public utilities: UtilitiesService) {
      
    let currentPatient = this.navParams.get("id");
    this.patients = this.utilities.getOrders();
    this.getOrderByPatient(currentPatient);
  }

  getOrderByPatient(currentPatient) {
    if (this.patients != null && this.patients.length > 0) {
      this.patients.forEach(order => {
        console.log(order.patient.id == currentPatient);
        if (order.patient.id == currentPatient) {  
          this.order = order;        
        }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceOrderPage');    
  }

}
