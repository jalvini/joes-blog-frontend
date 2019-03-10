import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.currentUser);
    this.username = user.username || null;
  }
}
