import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-exam-detail',
  templateUrl: 'exam-detail.html',
})
export class ExamDetailPage {

  private linkref: string = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtl: ViewController) {
    this.linkref = navParams.get("linkref");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
  }

  closeModal() {
    this.viewCtl.dismiss();
  }
}
