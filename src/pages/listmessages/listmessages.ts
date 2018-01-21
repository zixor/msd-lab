import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, Content, TextInput } from 'ionic-angular';

@Component({
  selector: 'page-listmessages',
  templateUrl: 'listmessages.html',
})
export class ListmessagesPage {

 @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;
    
    editorMsg = '';
    showEmojiPicker = false;

    constructor(navParams: NavParams,    
                private events: Events,) {
        // Get the navParams toUserId parameter
        
    }

}