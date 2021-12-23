import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routingDynamics';
  userArray: any;
  constructor(private userservice: UserService){}

 ngOnInit(){
 }
}
