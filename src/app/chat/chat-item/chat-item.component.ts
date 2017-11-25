import { ChatService} from '../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {

  @Input() public mensagem: Object;

  constructor(chatService: ChatService) { 
  }

}
