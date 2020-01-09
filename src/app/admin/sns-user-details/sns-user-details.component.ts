import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material'
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-sns-user-details',
  templateUrl: './sns-user-details.component.html',
  styleUrls: ['./sns-user-details.component.scss']
})
export class SnsUserDetailsComponent implements OnInit {
  userId: any;
  page=1;
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  selected;

  displayedColumns: string[] = ['job','facebook', 'linkedin','whatsapp','copylink','copyreferral'];
  constructor(private router:Router, private adminService:AdminService,private ActivatedRoute:ActivatedRoute, private commonService:CommonService,public dialog:MatDialog) { 
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.userId = params['id'];
    });
  }
  viewJobs(id){
    this.router.navigate(['/admin/view-jobs',id]); 
  }
  ngOnInit() {
    this.getSnsUserDetailsData();
  }

  getSnsUserDetailsData(){
    this.adminService.getSnsUserDetailsData(
    this.userId,
    this.page,
    res=>{
      console.log(res,"pkkkkkkkkkkk");
       this.dataTable = res.shared_job;
       this.totalPages = res.total_pages;
       this.dataSource = new MatTableDataSource(this.dataTable);
    },
    err=>{
     this.commonService.showError(err);
    }
  )
  }
  // sortByTableData(event){
  //   this.page =1;
  //   this.selected =event.value;
  //   this.getSnsUserDetailsData();
  // }
  pageChange(event){
    this.page = event;
    this.getSnsUserDetailsData();
  }
}
