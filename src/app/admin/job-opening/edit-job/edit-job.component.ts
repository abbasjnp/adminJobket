import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditJobService } from './../edit-job.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  dataTable: any;
  skillsTable=[] ;
  jobRequirements:[];
  d_Qualification:[];
  job_questions:[];
  jobId;

  public lat: Number =  28.628454;
  public lng: Number = 77.376945;

  public origin: any;
  public destination: any;
  public zoom: number = 8;

  picUrl:any = environment.baseUrl;

  myHTML = "<b>This is my awesome bold text</b>"

  constructor(private HttpClient: HttpClient, 
    private employerService: EditJobService,
    private route:ActivatedRoute,
    public dialog: MatDialog,
    ){}

    openDialogJobInfo(){
      const jobInfoDialog = this.dialog.open(EditDialogComponent, {
        width: '850px',
        data: {type: "jobInformation",data:this.dataTable}
      });
  
      jobInfoDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }

    openDialogKeySkill(){
      const skillsDialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "skills",data:this.dataTable}
      });
  
      skillsDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }
    
    openDialogJobDescription(){
      const descriptionDialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "description",data:this.dataTable}
      });
  
      descriptionDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }
    openDialogRequirement(){
      const requirementDialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "requirement",data:this.dataTable}
      });
  
      requirementDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }
    //========Desired Qualification===========//
     openDialog_d_qualification(){
      const d_qualification_Dialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "d_qualification",data:this.dataTable}
      });
  
      d_qualification_Dialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }
    //=======================================//
    //========Job Question===========//
     openDialog_job_questions(){
      const job_questions_Dialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "job_questions",data:this.dataTable}
      });
  
      job_questions_Dialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    }
    //=======================================//

    openDialogEditRequirement(data,i){
      
        const editRequirementDialog = this.dialog.open(EditDialogComponent,{
          width:'650px',
          data:{type:"editSingleRequirement",requirementData:data,index:i}
        });
        editRequirementDialog.afterClosed().subscribe(result => {
          
          if(result != 'cancel')
            this.getViewData();
        });
    }
    //==========Desired Qualification===========//
    openDialogEdit_d_qualification(data,i){
      
        const edit_d_qualification_Dialog = this.dialog.open(EditDialogComponent,{
          width:'650px',
          data:{type:"editSingle_d_qualification",d_qualification:data,index:i}
        });
        edit_d_qualification_Dialog.afterClosed().subscribe(result => {
          
          if(result != 'cancel')
            this.getViewData();
        });
    }
    //===========Job Question=================//
    openDialogEdit_job_questions(data,i){
        console.log("edit data question",data);
        const edit_job_questions_Dialog = this.dialog.open(EditDialogComponent,{
          width:'650px',
          data:{type:"editSingle_job_questions",job_questions:data,index:i}
        });
        edit_job_questions_Dialog.afterClosed().subscribe(result => {
          
          if(result != 'cancel')
            this.getViewData();
        });
    }
    //========================================//

    
    openDialogCompanyProfile(){
      const profileDialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "profile",data:this.dataTable}
      });
      profileDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });

    }
    
    openDialogLocation(){
      const locationDialog = this.dialog.open(EditDialogComponent, {
        width: '650px',
        data: {type: "location",data:this.dataTable}
      });
    
      locationDialog.afterClosed().subscribe(result => {
        
        if(result != 'cancel')
          this.getViewData();
      });
    
    }
   
  ngOnInit() {
   
    this.jobRequirements;
    this.d_Qualification;
    this.job_questions;
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.getViewData();
    
  }

  getViewData() {
    this.employerService.getViewJobData(
      this.jobId,
      res => {
        this.dataTable = res['job_information']; 
        console.log(this.dataTable, "data table");
        this.lat = this.dataTable.latitude;
        this.lng = this.dataTable.longitude;
               
        this.skillsTable = res.job_information.skills;        
        this.jobRequirements = res.job_information.job_requirements;
        this.d_Qualification = res.job_information.job_desired_requirements;
        this.job_questions = res.job_information.job_questions;
        
      },
      err => {

      }
    )
  }
  removeRequirement(data,index){
    
    this.employerService.removeRequirement(
      data.id,
      res=>{  
        
        this.jobRequirements.splice(index,1);
        
      },
      err=>{
        
      }
    )
  }
  remove_d_qualification(data,index){
    
    this.employerService.remove_d_qualification(
      data.id,
      res=>{  
        
        this.d_Qualification.splice(index,1);
        
      },
      err=>{
        
      }
    )
  }
  remove_job_questions(data,index){
    
    this.employerService.remove_job_questions(
      data.id,
      res=>{  
        
        this.job_questions.splice(index,1);
        
      },
      err=>{
        
      }
    )
  }
  

}
