import { DatabaseService } from './services/database.service';
import { Component, OnInit } from '@angular/core';
declare var firebase: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any;

  constructor(private db: DatabaseService) { 
    this.db.user$.subscribe(res => this.user = res);
  }

  login(): void {
    this.db.logIn();
  }

  logout(): void {
    this.db.logOut();
  }

}

