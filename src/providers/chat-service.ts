import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { UtilitiesService } from "./utilities.service";

export class ChatMessage {
    messageId: string;
    userId: string;
    userName: string;
    userAvatar: string;
    toUserId: string;
    time: number | string;
    message: string;
    status: string;
}

export class UserInfo {
    id: string;
    name?: string;
    avatar?: string;
}

@Injectable()
export class ChatService {

    constructor(private http: HttpClient,
        private events: Events,
        private utilities: UtilitiesService) {
    }

    mockNewMsg(msg) {
        const mockMsg: ChatMessage = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: './assets/avatars/1.png',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };

        setTimeout(() => {
            this.events.publish('chat:received', mockMsg, Date.now())
        }, Math.random() * 1800)
    }

    getMsgList(): Observable<ChatMessage[]> {
        const msgListUrl = './assets/mock/msg-list.json';
        return this.http.get<any>(msgListUrl)
            .pipe(map(response => response));
    }

    sendMsg(msg: ChatMessage) {
        return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
            .then(() => this.mockNewMsg(msg));
    }

    getUserInfo(): Promise<UserInfo> {
        const userInfo: UserInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: './assets/avatar.profesional.png'
        };
        return new Promise(resolve => resolve(userInfo));
    }

}