import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './users-list/users-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = []

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.users = this.userService.users
  }

}
