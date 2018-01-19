import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listchats',
  templateUrl: 'listchats.html',
})
export class ListchatsPage {

  toUser : {toUserId: string, toUserName: string};

  constructor() {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

}
