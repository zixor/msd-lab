import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Forum } from "../../models/forum.model";
import { UtilitiesService } from "../../providers/utilities.service";
import { Specialist } from "../../models/specialist.model";

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  private forum: Forum = {
    date: Date.now(),
    specialist: { "name": "", "medical_speciality": "", "avatar": "", "id": 1, "phonenumber": "" },
    topic: "",
    question: "",
    narrative: "",
    tags: ""
  };
  private specialists: Specialist[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private utilities: UtilitiesService) {
    this.specialists = this.utilities.getSpecialists();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  save() {  
    this.forum.specialist = this.specialists[Math.floor(Math.random() * 6) + 1];
    this.utilities.forums.push(this.forum);
    this.navCtrl.pop();
  }

}
