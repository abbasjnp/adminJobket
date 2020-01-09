import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material'
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
   dataTable;
  dataSource;
  totalPages;
  index=1;
  page=1;
  displayedColumns: string[] = [ 'user_id', 'user', 'amount' , 'requested_at'];
  constructor(private adminService:AdminService,
  	         private commonService:CommonService) 
             { }

  ngOnInit() {
     this.getTransaction();
  }
  getTransaction(){
  	this.adminService.getTransaction_history(
  	 this.page,
  	 res =>{
       console.log("res-->",res);
  	 	this.dataTable = res.withdrawal_data;
         this.totalPages = res.total_pages;
         this.dataSource = new MatTableDataSource(this.dataTable);
  	 },
  	 err =>{
       this.commonService.showError(err);
  	 }
  	);
  }
 pageChange(event){
  this.page = event;
  this. getTransaction();
}

}
