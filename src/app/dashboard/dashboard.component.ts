import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private  users: Array<object> = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  public  getUser() {
    this.userService.getUser().subscribe((data: Array<object>) => {
      this.users  =  data;
    });
  }
}
