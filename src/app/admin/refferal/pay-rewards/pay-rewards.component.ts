import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AdminService } from '../../admin.service';
import {CommonService} from './../../../shared/index.shared';

@Component({
  selector: 'app-pay-rewards',
  templateUrl: './pay-rewards.component.html',
  styleUrls: ['./pay-rewards.component.scss']
})
export class PayRewardsComponent implements OnInit {
datas;
jobId;
hides;
showbtn;
payRewardData;
  constructor( public dialogRef: MatDialogRef<PayRewardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private AdminService:AdminService, private commonService:CommonService) {
      this.datas =data.data;
      this.jobId =data.data.id;
     }
       
  ngOnInit() {
  this.getPayRewards();
  }

  getPayRewards(){
    this.AdminService.getPayRewards(
      this.jobId,
      res=>{
          this.payRewardData =res;
          this.hides   =this.payRewardData.paid_status.hiring_reward_status == 'Unpaid';
          this.showbtn =this.payRewardData.paid_status.referral_reward_status =='Paid';
        
      },
      err=>{
        this.commonService.showError(err);
      }
    )
  }

payReward(rewardType,rewardAmount){
 
  let request ={
    "user_id":this.datas.referred_by_id,
    "job_id":this.datas.job_id_pk,
    "applicant_id":this.datas.applicant_id,
    "reward_type":rewardType,
    "reward_amount":rewardAmount
    };
           this.AdminService.payReward(
           request, 
             res => {
               if (res.success) {   
                 this.commonService.showMessage(res.message);
                 this.dialogRef.close();
               }else{
                this.commonService.showError(res.message);
               }
             },
             err => {
              this.commonService.showError(err);
             });
       }

}
