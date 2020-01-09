import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../../admin.service';
import {CommonService} from './../../../shared/index.shared';

@Component({
  selector: 'app-refer-point',
  templateUrl: './refer-point.component.html',
  styleUrls: ['./refer-point.component.scss']
})
export class ReferPointComponent implements OnInit {
  referid;
  dataSource;
  page=1;
  totalPages;
  displayedColumns: string[] = ['CompanyName','job_id','Titlejob', 'Designation', 'Refdatetime', 'Location', 'RefStatus','hirring_reward','referral_reward'];

  constructor(private router:Router,private adminService:AdminService, private ActivatedRoute:ActivatedRoute,private commonService:CommonService) {
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.referid = params['id'];
    });
   }

  ngOnInit() {
    this.getApplyReferTable();
  }

  getApplyReferTable(){           //table
    this.adminService.getApplyReferTable(
      this.referid,
      this.page,
      res=>{
        this.dataSource  = res.jobs;
        this.totalPages = res.total_pages;
        
      },err=>{
        this.commonService.showError(err);
      }
      )
    }

    pageChange(event){
      this.page = event;
      this.getApplyReferTable();
    }

}
