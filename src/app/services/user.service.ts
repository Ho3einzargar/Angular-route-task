import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://api.github.com/users";
  constructor(private http: HttpClient) {}
    
    getUsers(){
      return this.http.get(this.url) 
    }
    getUsersId(id : any){
      return this.http.get(this.url +'/' + `${id}`) 
    }

}
