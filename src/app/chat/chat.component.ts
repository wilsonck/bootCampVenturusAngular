import { ChatService} from './chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public mensagens : Object[] = [];
  public mensagemInserir: string;

  constructor(private _chatService: ChatService){
    this._chatService.server.on('messages', m => this.mensagens.push(m));
  }

  public enviaMensagem(): void{

    let newMessage = {
      message: this.mensagemInserir,
      author: this._chatService.nomeUsuario
    };

    this._chatService.server.emit('messages', newMessage);
    this.mensagemInserir = "";
  }

}
