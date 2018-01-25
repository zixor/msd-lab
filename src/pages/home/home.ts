import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListpatientPage } from "../listpatient/listpatient";
import { ListlabsPage } from "../listlabs/listlabs";
import { ContactusPage } from "../contactus/contactus";
import { ListtopicscommunityPage } from "../listtopicscommunity/listtopicscommunity";
import { CongresosMedicosListPage } from "../congresos-medicos-list/congresos-medicos-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goto(index) {
    switch (index) {
      case 1:
       // this.navCtrl.push(HomePage);
        break;
      case 2:
        this.navCtrl.push(ListpatientPage);
        break;
      case 3:
        this.navCtrl.push(ListlabsPage);
        break;
      case 4:
        this.navCtrl.push(CongresosMedicosListPage);
        break;
      case 5:
        this.navCtrl.push(ListtopicscommunityPage);
        break;
      case 6:
        this.navCtrl.push(ContactusPage);
        break;
    }
  }

}
