import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User("", "", 0, "");
  users:any;
  message: any;
  selectedValue:any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
    let resp = this.service.getAllUsersServiceFunc();
    resp.subscribe((data) => this.users = data);
  }

  public registerUser() {
    let resp = this.service.registrationServiceFunc(this.user);
    resp.subscribe((data) => this.message = data);
  }

  public updateUserById(id:number){
    let resp = this.service.updateUserServiceFunc(this.selectedValue, this.user);
    resp.subscribe((data) => this.message = data);
  }

  public handleClear() {
    this.user.userName = "";
    this.user.userEmail = "";
    this.user.experience = null;
    this.user.domain = "";
  }

  onSelect(e){
    console.log(e.target.value);
    this.selectedValue = e.target.value;
  }
}
