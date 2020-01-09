import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {MatTableDataSource} from '@angular/material';
import {CommonService} from '../../shared/index.shared';

@Component({
  selector: 'app-neuvoo-source',
  templateUrl: './neuvoo-source.component.html',
  styleUrls: ['./neuvoo-source.component.scss']
})
export class NeuvooSourceComponent implements OnInit {

  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  searchText : string;
  page =1;
  selected = '1';
  
  viewJobs(id){
    this.router.navigate(['/admin/view-jobs',id]); 
  }

  displayedColumns: string[] = ['jobID', 'position', 'Designation', 'experience' , 'pdate', 'expdate', 'noapplicants', 'cname', 'location'];
  // dataSource = ELEMENT_DATA;
  constructor(private router:Router,private adminService:AdminService,private commonService:CommonService) { }
  
  ngOnInit() {
   this.getJobOpening();
  }

  getJobOpening(){
     this.adminService.getNeuvooApplicants(
      this.selected,
      this.page,
       res=>{
          this.dataTable = res.jobs;
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
    this.getJobOpening();
  }

  searchData() {
    let common ='get-neuvoo-applicants';
    this.adminService.searchData(
      common,
      this.searchText,
      res=>{
        this.dataSource = res.jobs;
      },
      err=>{
       this.commonService.showError(err);
      }
    )
  }
  // editjob(id:any){
  //   this.router.navigate(['admin/edit-job/'+id]);
  // }

  pageChange(event){
    this.page = event;
    this.getJobOpening();
  }
}
