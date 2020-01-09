import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material'
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-sns-user-tracking',
  templateUrl: './sns-user-tracking.component.html',
  styleUrls: ['./sns-user-tracking.component.scss']
})
export class SnsUserTrackingComponent implements OnInit {
  snsUserTrackingData;
  page=1;
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  selected;

  displayedColumns: string[] = ['user', 'facebook', 'linkedin','whatsapp','copylink','copyreferral'];
  constructor(private router:Router,
              private adminService:AdminService,
              private commonService:CommonService,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.getSnsUserTrackingData();
  }

  getSnsUserTrackingData(){
    this.adminService.getSnsUserTrackingData(
    this.selected,
    this.page,
    res=>{
       this.dataTable = res.shared_job;
       this.totalPages = res.total_pages;
       this.dataSource = new MatTableDataSource(this.dataTable);
    },
    err=>{
     this.commonService.showError(err);
    }
  )
  }
  
  sortByTableData(event){
    this.page =1;
    this.selected =event.value;
    this.getSnsUserTrackingData();
  }

  goTOUserDetails(rowData){
    this.router.navigate(['/admin/apply-job'], { queryParams: { id: rowData.user_id } });
  }

  pageChange(event){
    this.page = event;
    this.getSnsUserTrackingData();
  }

  snsUserDetails(userId){
    this.router.navigate(['/admin/sns-user-details'], { queryParams: { id: userId }});
  }
}
