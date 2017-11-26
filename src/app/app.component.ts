import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  //private socket = io.connect('https://pizzaposey-marvyn.c9users.io');

  constructor() {
  }

  ngOnInit() {
    //this.socket.on('new pizza', (data) => {
    //  console.log(data);
    //});
  }
}
