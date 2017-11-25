import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private _connectionService: ConnectionService) { }

  ngOnInit() {
    this._connectionService.getUsers().subscribe(res => console.log(res));
  }

}
