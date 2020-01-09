import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {AdminService} from './../../admin.service';
import {MatTableDataSource} from '@angular/material';
import {CommonService} from './../../../shared/index.shared';
import {environment} from './../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-applicants',
  templateUrl: './all-applicants.component.html',
  styleUrls: ['./all-applicants.component.scss']
})
export class AllApplicantsComponent implements OnInit {
  id;
  page;
  pageChange;
  request;
  dataTable:Array<any>=[];
  dataSource;
  jobInfoId;
  totalPages;
  private baseUrl = environment.baseUrl;

  displayedColumns: string[] = ['cname','email','contactus','Experience','applydate','notice_period','salary','referred_by_name','question1','question2','status','resume','view-resume'];

  constructor(private router:Router, private adminService:AdminService,private route: ActivatedRoute,private commonService:CommonService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.allApplicants();
  }

  allApplicants(){
 this.adminService.allApplicants(
    this.id,
    res=>{
      this.totalPages = res.total_pages;
      this.dataTable = res.applicants;
      console.log("dataSource",res.applicants);
      this.jobInfoId = res.jobinfo.job_id;
      this.dataSource = new MatTableDataSource(this.dataTable);
    },
    err=>{
      this.commonService.showError(err);
    }
  )
  }

  changeStatus(changeValue,data){
    this.request = {
      "candidateid": data.user_id,
      "jobstatus": changeValue.value,
      "jobid": data.jobid
    }
    this.adminService.changeStatus(
      this.request,
      res => {
       console.log(res);
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

  applyJob(id){
    this.router.navigate(['/admin/apply-job'], { queryParams: { id: id } });
  } 
}
