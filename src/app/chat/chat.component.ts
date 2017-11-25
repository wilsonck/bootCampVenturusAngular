import { ChatService} from './chat.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit{

  public mensagens : Object[] = [];
  public mensagemInserir: string;

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService){
    this._chatService.server.on('messages', m => this.mensagens.push(m));
  }

  private scrollToBottom (): void{
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  ngAfterViewInit(){
    this.scrollToBottom();
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
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
