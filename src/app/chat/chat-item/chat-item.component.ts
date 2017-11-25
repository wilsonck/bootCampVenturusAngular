import { ChatService} from '../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {

  @Input() public mensagem: string;
  public hora: Date;
  public usuario: string;

  constructor(chatService: ChatService) { 
    this.hora = new Date();
    this.usuario = chatService.nomeUsuario();
  }

}
