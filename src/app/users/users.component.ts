import { Component, OnInit, } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArray: any;

  constructor( private userservice: UserService ) {}
  openUser(p: any){
    console.log(p);
    }
  ngOnInit(): void {
      this.userservice.getUsers().subscribe(
        response => this.userArray = response
      );
  }

}
