import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ExamDetailPage } from "../exam-detail/exam-detail";

@Component({
  selector: 'page-exams-fragment',
  templateUrl: 'exams-fragment.html',
})
export class ExamsFragmentPage {

  private order = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtl: ModalController) {
    this.order = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsFragmentPage');
  }

  openExam(linkref) {
    if (linkref) {
       this.modalCtl.create(ExamDetailPage,{"linkref":linkref}).present();
    }
  }

}
