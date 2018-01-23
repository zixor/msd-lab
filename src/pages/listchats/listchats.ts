import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilitiesService } from "../../providers/utilities.service";
import {TimeAgoPipe} from "time-ago-pipe";

@Component({
  selector: 'page-listchats',
  templateUrl: 'listchats.html',
})

export class ListchatsPage {

  private msgList: any[] = [];


  toUser: { toUserId: string, toUserName: string };
  user: { id: string, toUserName: string };

  constructor(private utilitiesService: UtilitiesService) {
    this.msgList = this.utilitiesService.getListMessage();
    this.toUser = {
      toUserId: '140000198202211138',
      toUserName: 'Hancock'
    }

    this.user = {
      id: '210000198410281948',
      toUserName: 'Hancock'
    }
  }

  sendMsg(){}

}
