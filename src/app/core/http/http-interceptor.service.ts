import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {AuthService} from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService {
  // token = localStorage.getItem('token');
  constructor(private auth:AuthService) { }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.auth.getToken()
      }
    })
    return next.handle(tokenizedReq);
  }
}
