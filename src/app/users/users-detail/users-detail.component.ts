import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { UsersListService } from '../users-list/users-list.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user!: User;
  id!: number;

  constructor(private route: ActivatedRoute, private usersListService: UsersListService) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersListService.getUser(this.id);
      }
    )
  }

}
