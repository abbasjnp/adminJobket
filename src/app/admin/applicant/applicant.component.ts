import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material'
import {CommonService} from './../../shared/index.shared';
import {environment} from './../../../environments/environment';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  dataTable:Array<any>=[];
  dataSource;
  request;
  totalPages;
  searchText : string;
  page:any =1;
  selected:any;
  config: any;
  count;
  page1;
  stateChange = false;
  reloadFirstTime=0;
  private baseUrl = environment.baseUrl;

  displayedColumns: string[] = ['cname','email','contactus','Experience','job','applydate','notice_period','salary','referred_by_name','question1','question2','status','resume','view-resume']; 
  constructor(
    private router:Router,
    private adminService:AdminService,
    private commonService:CommonService,
    public dialog:MatDialog) { }

  ngOnInit() {
    this.getAllAplicants()
  }

  getAllAplicants(){
    this.adminService.getAllAplicants(
     this.page,
      res=>{
        console.log(res);
         this.dataTable = res.applicants;
         this.totalPages = res.total_pages;
         this.dataSource = new MatTableDataSource(this.dataTable);
      },
      err=>{
       this.commonService.showError(err);
      }
    )
 }
 
 changeStatus(changeValue,data){
  // console.log(changeValue.value);
  // var answer = confirm("Are you sure want to change Status ?");
	// 				if(!answer)
	// 				{
  //           return;  
	// 				}
  this.request = {
    "candidateid": data.user_id,
    "jobstatus": changeValue.value,
    "jobid": data.job_id
  }
  this.adminService.changeStatus(
    this.request,
    res => {
     console.log(res);
     this.commonService.showMessage(res.message);
    },
    err => {
      this.commonService.showError(err);
    });
 }

 downloadResume(applicantsData){
  if(applicantsData.resume == null || applicantsData.resume == ''){
    this.commonService.showError("user have not uploaded resume yet");
     return;
  }
  this.downloadURI(`${this.baseUrl}${applicantsData.resume}`, applicantsData.fullname);
}

downloadURI(uri, name) {
  var link = document.createElement("a");
  link.href = uri;
  link.setAttribute("target", "_blank");
  link.setAttribute("download", "");
  link.download = "";
  document.body.appendChild(link);
  link.dispatchEvent(new MouseEvent('click'));
}

viewResume(id){
  this.router.navigate(['/admin/view-resume',id]);
}

pageChange(event){
  this.page = event;
  this.getAllAplicants();
}
}
