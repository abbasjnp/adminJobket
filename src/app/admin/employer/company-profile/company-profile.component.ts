import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {AdminService} from '../../admin.service';
import {MatTableDataSource} from '@angular/material'
import {CommonService} from '../../../shared/index.shared';
import {environment} from './../../../../environments/environment';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})

export class CompanyProfileComponent implements OnInit {
  public key;
  dataTable:Array<any>=[];
  employerInfo;
  dataSource;
  totalPages;
  page=1;
  logo;
  request: { id: any; hyperstatus: any; };
  isAccountActive: boolean;
  isHyperStatus: string;
  public _baseurl = environment.baseUrl;
  jobInformation(jobinfoID){
    this.router.navigate(['/admin/view-jobs',jobinfoID])
  }

  displayedColumns: string[] = ['Jobid', 'position', 'Designation', 'Experience', 'Location', 'posteddate', 'expdate', 'applicant','Status'];
  constructor(private router:Router,private route: ActivatedRoute,private adminService:AdminService,private commonService:CommonService) { }

  ngOnInit() {
       this.key = this.route.snapshot.queryParamMap.get('id');
       this.getEmployerDetails(this.key);
}


changeHyperStatus(hyperStatus) {

      if (hyperStatus  == "Paid") {
        this.isHyperStatus = "True";
        } else {
          this.isHyperStatus = "False";
         }
  this.request = {
    "id": this.key,
    "hyperstatus": this.isHyperStatus
  }

    this.adminService.changeHyperStatus(
      this.request,
      res=>{
         if(this.isHyperStatus == "True"){
          this.employerInfo.ishyperhire="Paid";
         }else{
          this.employerInfo.ishyperhire="Unpaid";
         }
         this.commonService.showMessage(res.message);
      },
      err=>{
          console.log(err,"Errorrrrrr");
      }
    )
  }

  getEmployerDetails(key){
    this.adminService.getEmployerDetails(
      key,
      this.page,
      res=>{
         this.logo =res.company_logo;
         this.employerInfo = res.employer_info;
         this.totalPages = res.total_pages;
         if (res.employer_info.accountstatus  == "Active") {
          this.isAccountActive = true;
          } else {
          this.isAccountActive = false;
        }
         this.dataTable = res.jobs;
         this.dataSource = new MatTableDataSource(this.dataTable);
      },
      err=>{
        this.commonService.showMessage(err);
      }
    )
 }
 pageChange(event){
  this.page = event;
  this.getEmployerDetails(this.key);
}

 employerActivate(){
  this.adminService.employerActivate(
    this.key,
    res=>{
      this.isAccountActive = true;
      this.employerInfo.accountstatus = "Active";
       this.commonService.showMessage(res.message);
    },
    err=>{
      this.commonService.showMessage(err);
    }
  )
 }

 employerDeactivate(){
  this.adminService.employerDeactivate(
    this.key,
    res=>{
      this.isAccountActive = false;
      this.employerInfo.accountstatus = "Inactive";
       this.commonService.showMessage(res.message);
    },
    err=>{
      this.commonService.showMessage(err);
    }
  )
 }

}
