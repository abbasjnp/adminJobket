import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList:any[]=[];

  constructor(private adminService:AdminService) { }
   
  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.adminService.getUsers(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
