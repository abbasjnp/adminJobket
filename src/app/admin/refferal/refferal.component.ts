import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material';
import {PayRewardsComponent} from './pay-rewards/pay-rewards.component';
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-refferal',
  templateUrl: './refferal.component.html',
  styleUrls: ['./refferal.component.scss']
})
export class RefferalComponent implements OnInit {
  dataTable;
  dataSource;
  totalPages;
  searchText;
  index=1;
   page=1;
   displayedColumns: string[] = ['job_id', 'applicant_name', 'job_title', 'company' , 'referred_by_name','pay'];

  constructor(private router:Router,private adminService:AdminService,public dialog:MatDialog,private commonService:CommonService) { }

  ngOnInit() {
    this.getReferral();
  }

  getReferral(){
    this.adminService.getReferral(
      this.page,
      res=>{
         this.dataTable = res.applicant;
         this.totalPages = res.total_pages;
         this.dataSource = new MatTableDataSource(this.dataTable);
      },
      err=>{
        this.commonService.showError(err);
      }
    )
 }

 searchData() {
  let common ='all-jobs-applicants';
  this.adminService.searchData(
    common,
    this.searchText,
    res=>{
      this.dataSource = res.applicant;
    },
    err=>{
     this.commonService.showError(err);
    }
  )
}

 applyJob(id){
   this.router.navigate(['/admin/apply-job'], { queryParams: { id: id } });
 } 

 pageChange(event){
  this.page = event;
  this. getReferral();
}

openDialog(payrewadsData){
  const dialogHyperHire = this.dialog.open(PayRewardsComponent, {
    width: '400px',
    height: '200px',
    data: {type: "",data:payrewadsData}
  });

  dialogHyperHire.afterClosed().subscribe(result => {
    if(result != 'cancel')
      this.getReferral();
  });
  }
}
