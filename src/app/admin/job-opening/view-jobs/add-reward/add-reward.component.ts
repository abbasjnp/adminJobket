import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AdminService} from './../../../admin.service';
import {CommonService} from './../../../../shared/service/common.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{Router} from '@angular/router'

@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.scss']
})
export class AddRewardComponent implements OnInit {
  form: FormGroup;
  request;
  id;

  constructor( public dialogRef: MatDialogRef<AddRewardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, 
    private adminService: AdminService,
    private commonService:CommonService,
    private router:Router) {

      this.id = data.data;

      this.form  =  this.fb.group({
        reffralReward: ['', Validators.required],
        hiringReward: ['', Validators.required]
    });
     }

  ngOnInit() {
   
  }

  addReward(){
    this.request = {
      "referral_reward": this.form.value.reffralReward,
      "hiring_reward": this.form.value.hiringReward,
      "id":this.id
    }
  
    this.adminService.addReward(
      this.request, 
        res => {
          this.dialogRef.close();
        },
        err => {
          this.commonService.showError(err);
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
