import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{DataService} from './../http/data.service'
import {environment} from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private dataService:DataService) { }
  
  // public authUrl = environment.baseUrl + 'cms/admin-login/';
  public authUrl = environment.baseUrl + "adminpanel/"

  // loginAdmin(requestdata){
  //   return this.http.post(this.authUrl,requestdata);
  // }


  public login(user, successCall, errorCall) {
    this.dataService.post(this.authUrl+'login/', user).subscribe(
      (res: any) => {
        if (res) {
          // this.loggedIn.next(true);
          // this.setUser(res);
          successCall(res);
        } else {
          // this.loggedIn.next(false);
          errorCall(res.error);
        }
      },
      err => {
        // this.loggedIn.next(false);
        errorCall(err);
      }
    );
}
// getFile(){
//   return this.http.get('https://jsonplaceholder.typicode.com/todos/');
// }
getToken(){
  const tokenObj = localStorage.getItem('token');
  return tokenObj;
}

}
