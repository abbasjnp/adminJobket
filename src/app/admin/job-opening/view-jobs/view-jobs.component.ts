import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {AdminService} from './../../admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatTableDataSource} from '@angular/material';
import {AddRewardComponent} from './../view-jobs/add-reward/add-reward.component';
import {environment} from '../../../../environments/environment';
import {CommonService} from '../../../shared/index.shared';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent implements OnInit {
  dataTable:Array<any>=[];
  request;
  companyLogo;
  jobInformation;
  jobRequirments;
  jobDesiredRequirments;
  keySkill;
  jobStatus;
  id;
  lat;
  lng;
  public origin: any;
  private _url = environment.baseUrl
 
  dropDown=["active","deactivated","expired"];
  constructor(private router:Router, private adminService:AdminService,private route: ActivatedRoute, public dialog: MatDialog,private commonService:CommonService) { }

  viewApplicant(){
    this.router.navigate(['/admin/all-applicants',this.id])
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getViewJob();
  }

  getViewJob(){
    this.adminService.getViewJob(
      this.id,
      (res:any)=>{
         this.jobInformation  = res.job_information;
         console.log("job information",this.jobInformation);
         this.companyLogo = this._url+this.jobInformation.company_logo;
         this.keySkill = this.jobInformation.skills;
         this.jobRequirments = this.jobInformation.job_requirements;
         this.jobDesiredRequirments = this.jobInformation.job_desired_requirements;
         this.lat = this.jobInformation.latitude;
         this.lng = this.jobInformation.longitude;
         this.jobStatus=this.jobInformation.job_status;
      },
      err=>{
        this.commonService.showMessage(err);
      }
    )
 }
 approveJob(){
  this.adminService.approveJob(
    this.id,
    res=>{
      this.jobStatus="active";
      this.jobInformation.job_status= this.jobStatus;
      this.commonService.showMessage(res.message);
    },
    err=>{
      this.commonService.showMessage(err);
    }
  )
 }
 
 disaaproveJob(){
  this.adminService.disaaproveJob(
    this.id,
    res=>{
      this.jobStatus='deactivated';
      this.jobInformation.job_status= this.jobStatus;
      this.commonService.showMessage(res.message);
    },
    err=>{
      this.commonService.showMessage(err);
    }
  )
 }

 openDialogaddReward(){
  const jobInfoDialog = this.dialog.open(AddRewardComponent, {
    width: '400px',
    data: {type: "",data:this.id}
  });

  jobInfoDialog.afterClosed().subscribe(result => {
    if(result != 'cancel')
    this.getViewJob();
  });
}

changeJobStatus(event){
    this.request = {
      "id":this.id,
      "job_status":event.target.value
      }

    this.adminService.changeJobStatus(
      this.request,
      res => {
        this.commonService.showMessage(res.message);
      },
      err => {
        this.commonService.showMessage(err);
      }
    ); 
}

viewCompanyProfile(id){
 this.router.navigate(['/admin/company-profile'], { queryParams: { id: id } });
}

}
