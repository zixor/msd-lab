import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Forum } from "../../models/forum.model";
import { UtilitiesService } from "../../providers/utilities.service";
import { Specialist } from "../../models/specialist.model";
import { ForumPage } from "../forum/forum";
import { ListdetailforumPage } from "../listdetailforum/listdetailforum";

@Component({
  selector: 'page-listforum',
  templateUrl: 'listforum.html',
})
export class ListforumPage {

  private forums: Forum[] = [];
  private specialist: Specialist[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilities: UtilitiesService) {
    this.forums = this.utilities.forums;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListforumPage');
  }

  onAddClick() {
    this.navCtrl.push(ForumPage);
  }

  detail() {
    //this.navCtrl.push(ListdetailforumPage);
  }

}
