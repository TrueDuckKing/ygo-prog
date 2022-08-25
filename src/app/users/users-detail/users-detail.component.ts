import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../users-list/users-list.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user!: User;
  id!: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.userService.getUser(this.id);
      }
    )
  }

}
