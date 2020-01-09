import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router'
import { AdminService } from '../../admin.service';
import { MatTableDataSource } from '@angular/material';
import { saveAs } from 'file-saver';
import {environment} from './../../../../environments/environment';
import {CommonService} from './../../../shared/index.shared';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

  jobAppliedBtn: boolean;
  refferPointBtn: boolean;
  page=1;
  jobsid: any;
  profile: any;
  dataTable:Array<any>=[];
  dataSource;
  totalPages: any;

  public _baseurl = environment.baseUrl;

  constructor(private router:Router,private adminService:AdminService, private ActivatedRoute:ActivatedRoute,private commonService:CommonService ) { 
    this.jobAppliedBtn = true;
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.jobsid = params['id'];
    });
  }
  displayedColumns: string[] = ['CompanyName', 'position', 'Designation', 'Experience', 'Location', 'datetime', 'reffername', 'Status'];
  ngOnInit() {
    this.getApplyJob();
    this.getApplyJobTable();
  }

  changeComponent(btnID: any) {
    if (btnID == 1) {
      this.jobAppliedBtn = true;
      this.refferPointBtn = false;
    }
    if (btnID == 2) {
      this.jobAppliedBtn = false;
      this.refferPointBtn = true;
    }
  }

  getApplyJob(){
    this.adminService.getApplyJobList(
      this.jobsid,
      res=>{
        this.profile = res.profile_data.userProfile;
      }
      ,err=>{
        this.commonService.showError(err);
      }
      )
    }
  
    getApplyJobTable(){
    this.adminService.getApplyJobTable(
      this.jobsid,
      this.page,
      res=>{
        this.dataSource  = res.jobs;
        this.totalPages = res.total_pages;
      },err=>{
        this.commonService.showError(err);
      }
      )
    }

    viewResume(){
      this.router.navigate(["/admin/view-resume",this.jobsid]);
    }

    pageChange(event){
      this.page = event;
      this. getApplyJobTable();
    }

    downloadResume(){
        if(this.profile.resume == null || this.profile.resume == ''){
          this.commonService.showError("user have not uploaded resume yet");
           return;
        }
        this.downloadURI(`${this._baseurl}${this.profile.resume}`, this.profile.first_name);
    }
    downloadURI(uri, name) {
      var link = document.createElement("a");
      link.href = uri;
      link.setAttribute("target", "_blank");
      link.setAttribute("download", "");
      link.download = "";
      //link.innerHTML = "Download Pdf";
      document.body.appendChild(link);
      link.dispatchEvent(new MouseEvent('click'));

      // if (uri.endsWith(".pdf")) {
      //   //window.location=uri;
      //   //window.focus();
      // }
      // else {
      //   setTimeout(() => {
      //     link.dispatchEvent(new MouseEvent('click'));
      //   }, 2000);
  
      // }
    }
}
