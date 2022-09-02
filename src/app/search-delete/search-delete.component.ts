import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  message:any;
  userId:number;

  constructor(private service:UserRegistrationService) { }

  ngOnInit() {
    let resp = this.service.getAllUsersServiceFunc();
    resp.subscribe((data) => this.users = data);
  }

  public deleteUser(id:number){
    let resp = this.service.deleteUserServiceFunc(id);
    resp.subscribe((data) => this.users = data);
  }

  public findUserById(){
    let resp = this.service.getUserByIdServiceFunc(this.userId);
    this.users=[];
    resp.subscribe((data) => this.users.push(data));
  }
}
