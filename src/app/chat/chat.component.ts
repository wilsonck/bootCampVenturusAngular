import { ChatService} from './chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public mensagens : string[] = [];
  public mensagemInserir: string;

  constructor(chatService: ChatService){}

  public enviaMensagem(): void{
    this.mensagens.push(this.mensagemInserir);
    this.mensagemInserir = '';
  }

}
