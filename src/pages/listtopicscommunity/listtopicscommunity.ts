import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";
import { SpecialistPage } from "../specialistpage/specialistpage";

@Component({
  selector: 'page-listtopicscommunity',
  templateUrl: 'listtopicscommunity.html',
})
export class ListtopicscommunityPage {

  private items: any[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public utilService: UtilitiesService) {
    this.items = this.utilService.getListTopics();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListtopicscommunityPage');
  }

  openNavDetailsPage(item) {
    if(item.id == 1 ){
      this.navCtrl.push(SpecialistPage);
    }
  }

}
