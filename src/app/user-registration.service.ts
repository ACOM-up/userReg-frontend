import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public registrationServiceFunc(user){
    return this.http.post("http://localhost:8080/api/v1/users/add",user,{responseType:'text' as 'json'});
  }

  public getAllUsersServiceFunc(){
    return this.http.get("http://localhost:8080/api/v1/users/userInfo");
  }

  public getUserByIdServiceFunc(id){
    return this.http.get("http://localhost:8080/api/v1/users/userInfo/"+id);
  }

  public updateUserServiceFunc(id, user){
    return this.http.put("http://localhost:8080/api/v1/users/update/"+id, user, {responseType:"text" as "json"});
  }

  public deleteUserServiceFunc(id){
    return this.http.delete("http://localhost:8080/api/v1/users/delete/"+id);
  }
}
