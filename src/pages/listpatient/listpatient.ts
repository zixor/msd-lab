import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listpatient',
  templateUrl: 'listpatient.html',
})
export class ListpatientPage {

  private patients: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patients = [
      { "name": "Juan Carlos Restrepo", "age": "24", "gender": "Hombre", "id": 1, "phonenumber": "3166266373", "color": "warm-1","lastreview":"Feb 25, 2017" },
      { "name": "Monica Lucia Gil", "age": "33", "gender": "Mujer", "id": 2, "phonenumber": "3166266373", "color": "warm-2" ,"lastreview":"Ago 23, 2017"},
      { "name": "David Nolberto Gonzalez", "age": "30", "gender": "Hombre", "id": 3, "phonenumber": "3166266373" , "color": "warm-3","lastreview":"Jun 15, 2017"},
      { "name": "Laura Maria Betancur", "age": "21", "gender": "Mujer", "id": 4, "phonenumber": "3166266373", "color": "warm-4","lastreview":"Nov 1, 2017" },
      { "name": "Esteban Salazar", "age": "44", "gender": "Hombre", "id": 5, "phonenumber": "3166266373", "color": "warm-5","lastreview":"Nov 1, 2017" },
      { "name": "Jhon Garces", "age": "34", "gender": "Hombre", "id": 6, "phonenumber": "3166266373", "color": "warm-6", "lastreview":"Dic 26, 2017" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListpatientPage');
  }

  edit(id) {

  }

  share() {

  }

  call(phoneNumber) {

  }

}
