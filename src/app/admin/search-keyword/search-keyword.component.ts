import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material'
import {CommonService} from './../../shared/index.shared';
import{Router} from '@angular/router';

@Component({
  selector: 'app-search-keyword',
  templateUrl: './search-keyword.component.html',
  styleUrls: ['./search-keyword.component.scss']
})
export class SearchKeywordComponent implements OnInit {

  dataTable;
  dataSource;
  totalPages;
  dataTable1=[];
  index=1;
  page=1;
  displayedColumns: string[] = [  'User', 'Keyword' ];
  constructor(private adminService:AdminService,
             private commonService:CommonService,
             private router:Router) 
             { }

  ngOnInit() {
     this.get_user_search_keywords();
  }
  gotoUserDetail(id:any){
    console.log("user",id);
    if(id)
    this.router.navigate(['/admin/apply-job'], { queryParams: { id: id } });
  }
  get_user_search_keywords(){
  	this.adminService.get_User_Search_Keyword(
  	 this.page,
  	 res =>{
       console.log("search-keyword",res);
       this.dataTable = res.keywords;
       for(let i=0; i<this.dataTable.length; i++){
          if(this.dataTable[i].keyword!='undefined'){
            // console.log('pkkkkkk')
            // this.dataTable1;
            this.dataTable1.push(this.dataTable[i]);
          }
       }
         this.totalPages = res.total_pages;
         this.dataSource = new MatTableDataSource(this.dataTable1);
         this.dataTable1 = [];
  	 },
  	 err =>{
       this.commonService.showError(err);
  	 }
  	);
  }
 pageChange(event){
   console.log("page event",event);
  this.page = event;
  this. get_user_search_keywords();
}


}
