import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobCarousalsComponent } from './../job-carousals.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {AdminService} from './../../admin.service';
import {CommonService} from './../../../shared/index.shared';
import {environment} from './../../../../environments/environment'

@Component({
  selector: 'app-add-carousals',
  templateUrl: './add-carousals.component.html',
  styleUrls: ['./add-carousals.component.scss']
})
export class AddCarousalsComponent implements OnInit {
  uploadPhoto;
  imagePreview;
  form: FormGroup;
  jobId = new FormControl('');
  title = new FormControl('');
  description = new FormControl('');
  baseUrl = environment.baseUrl;
  @ViewChild('fileInput') imgType:any;
  width;
  height;
  uploadSuccess:boolean;

  constructor(public dialogRef: MatDialogRef<JobCarousalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public adminService:AdminService,
    public commonService:CommonService) {
    this.form = this.fb.group({
      "jobId": this.jobId,
      "title": this.title,
       "description":new FormControl(this.description)
    })
    if(data.type=='editCarousalData'){
      this.jobId.patchValue(this.data.data.job_id);
      this.title.patchValue(this.data.data.slider_title);
      this.imagePreview =this.baseUrl+ this.data.data.slider_image; 
    }
   
    
  }

  uploadImage(event) {
    let file:any = event.target.files[0];
    this.uploadSuccess = true;
    let reader = new FileReader;
    reader.onload = () => {
      var img:any = new Image();
      img.src = reader.result;
      img.onload = () => {
          this.width = img.width;
          this.height = img.height;
          if(this.width<1400 && this.height<400){
            // alert("width should be of 1400 px");
            this.commonService.showError('The selected image must be size 1400x400');
            return false;
          }
          else{
            this.uploadPhoto = file;
            this.imagePreview = reader.result;               
          }
      };
      
    };
   
    reader.readAsDataURL(file);
  
    this.imgType.nativeElement.value ="";
  }

  ngOnInit() {
  }
  submitDialog(check) {
     let formData = new FormData();
      formData.append('job_id',this.form.value.jobId);
      formData.append('slider_title',this.form.value.title);
      formData.append('slider_short_description',this.form.value.description);
      formData.append('slider_image',this.uploadPhoto);
    if(check==0){
      this.adminService.addCarousal(
        formData,
        (res:any)=>{
            if(res.success){
              this.commonService.showMessage(res.message);
              this.dialogRef.close();
            }
            else{
              this.commonService.showError(res.message);
            }
            
        },
        err=>{
             console.log(err,"errror");
             this.commonService.showError(err.message);
        }
      )
    }
    else{
      this.adminService.updateCarousal(
        check,
        formData,       
        (res:any)=>{
            if(res.success){
              this.commonService.showMessage(res.message);
              this.dialogRef.close();
            }
            else{
              this.commonService.showError(res.message);
            }
        },
        err=>{
             this.commonService.showError(err.message);
        }
      )
    }
     

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
