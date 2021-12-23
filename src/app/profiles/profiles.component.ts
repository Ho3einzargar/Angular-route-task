import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
userArray: any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {

  //   this.userservice.getUsersId().subscribe(
  //   response => this.userArray = response
  // );
    }

}
