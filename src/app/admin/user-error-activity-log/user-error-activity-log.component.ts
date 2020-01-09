import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material'
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-user-error-activity-log',
  templateUrl: './user-error-activity-log.component.html',
  styleUrls: ['./user-error-activity-log.component.scss']
})
export class UserErrorActivityLogComponent implements OnInit {

  values:string = '';
  searchText : string;
  totalPages;
  page =1;
  message:string = '';
 displayedColumns: string[] = ['email', 'request-type', 'message', 'timestamp'];
 dataTable:Array<any>=[];
 dataSource;

 constructor(private adminService:AdminService,private commonService:CommonService) { }
 
 ngOnInit() {
 
 }

search(){
 let search = {'search': this.searchText};
 this.adminService.postErrorLog(search,this.page,
      res=>{
         this.dataTable = res.logs;
         this.totalPages = res.total_pages;
         this.dataSource = new MatTableDataSource(this.dataTable);
          if(!res.success){
             this.message = "No Data Found";
         }
         else{
             this.message = '';
         }
      },
      err=>{
        this.commonService.showError(err);
      }
 );
}

pageChange(event){
  this.page = event;
  this.search();
 }
}
