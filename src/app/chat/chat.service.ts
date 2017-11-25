import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  public usuario: string = '';

  constructor() {
    if (!localStorage.getItem('nome'))
      this.usuario = prompt("Qual é o seu nome?");
    else
      this.usuario = localStorage.getItem('nome');

      localStorage.setItem('nome', this.usuario);
   }

}