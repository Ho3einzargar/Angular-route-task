import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
userArray: any;
idUser: any;

  constructor(private userservice: UserService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUser= this.activeRoute.snapshot.paramMap.get('id');
    this.userservice.getUsersId(this.idUser).subscribe(
     response => this.userArray = response
    )
    }
}
