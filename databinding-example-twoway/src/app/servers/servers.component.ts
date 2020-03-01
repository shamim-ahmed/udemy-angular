import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TestServer';
  serverCreationMessage = "No server was created!";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationMessage = "Server was created! Name is " + this.serverName;
  }
}
