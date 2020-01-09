import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material'
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-withdraw-request',
  templateUrl: './withdraw-request.component.html',
  styleUrls: ['./withdraw-request.component.scss']
})
export class WithdrawRequestComponent implements OnInit {
   dataTable;
  dataSource;
  totalPages;
  index=1;
  page=1;
  displayedColumns: string[] = [ 'user_id', 'user', 'amount' , 'requested_at','pay'];
  constructor(private adminService:AdminService,
  	         private commonService:CommonService) 
             { }

  ngOnInit() {
  	this.getWithdraw();
  }
  getWithdraw(){
  	this.adminService.getWithdraw_Req_List(
  	 this.page,
  	 res =>{
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
  this.getWithdraw();
}

payRequest(id:any){
	const data ={
		'transaction_id':id
	    }
	this.adminService.withdrawalPay(
      data,
      res =>{
      	 if(res.success){
      	 this.commonService.showMessage(res.message);
      	 this.getWithdraw();
      	}
      	else{
      	  this.commonService.showError(res.message);
      	}
      },
      err =>{
      	this.commonService.showError(err);
      }
	)
}

}
