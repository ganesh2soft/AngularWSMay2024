import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Staff } from './staff';
import {map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  userstaff=new Staff();
  private usersUrl: string;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username?: String;
  public password?: String;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8333/payroll';
  }

  public loginfn(staff:Staff){  
         
      return this.http.post(this.usersUrl+ '/allemployeeshdlr',staff);  
  }  
  public findAll(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.usersUrl+ '/allemployeeshdlr');
  }
  public getNoticeDetails():Observable<[]>{
  //  return this.http.get(environment.rooturl + AppConstants.NOTICES_API_URL,{ observe: 'response' });
return this.http.get<[]>(this.usersUrl+ '/noticeshdlr');
}

authenticationService(username: string, password: string) {
  
  return this.http.get<Staff>(this.usersUrl+'/loginhdlr',
    { headers: { authorization: this.createBasicAuthToken(username, password) } })
    
    .pipe(map((res) => {
      this.username = username;
      this.password = password;
      
      this.registerSuccessfulLogin(username, password);
      this.userstaff=res;
      console.log("REsponse ",this.userstaff);
      
    }));
    
}
createBasicAuthToken(username: String, password: String) {
  return 'Basic ' + window.btoa(username + ":" + password)
}

registerSuccessfulLogin(username:string, password:string) {
  sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
}


  public registerUser(staff:Staff) {
    return this.http.post(this.usersUrl+'/addemployeehdlr',staff,{responseType:'text',});
  }
}
