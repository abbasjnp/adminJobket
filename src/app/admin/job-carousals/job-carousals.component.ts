import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material';
import {CommonService} from './../../shared/index.shared';
import {environment} from './../../../environments/environment'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddCarousalsComponent} from './add-carousals/add-carousals.component'


@Component({
  selector: 'app-job-carousals',
  templateUrl: './job-carousals.component.html',
  styleUrls: ['./job-carousals.component.scss']
})
export class JobCarousalsComponent implements OnInit {
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  page =1;
  dataCarousal;
  baseUrl = environment.baseUrl;
  displayedColumns: string[] = ['jobID', 'title', 'image','action'];
  constructor(
    private router:Router,
    private adminService:AdminService,
    private commonService:CommonService,
    public dialog:MatDialog) {
  }
  ngOnInit() { 
   this.getJobOpening(); 
  }

  getJobOpening(){
     this.adminService.getJobSlider(
       res=>{
            this.dataTable = res.sliders;
            this.totalPages = res.total_pages;         
            this.dataSource = new MatTableDataSource(this.dataTable);
       },
       err=>{
        this.commonService.showError(err);
       }
     )
  }
  pageChange(event){
    this.page = event;
    // this.getJobOpening();
  }

  addCarosoulDialog(): void {
    const dialogRef = this.dialog.open(AddCarousalsComponent, {
      width: '850px',
      data: {type:'addCarousalData'}
    });

    dialogRef.afterClosed().subscribe(result => {

      this.getJobOpening(); 
     
    });
  }

  editCarosoulDialog(element): void {
    const dialogRef = this.dialog.open(AddCarousalsComponent, {
      width: '850px',
      data: {type:'editCarousalData',data:element}
    });

    dialogRef.afterClosed().subscribe(result => {
 
      this.getJobOpening(); 
     
    });
  }

  deleteCarousal(id,index){

    this.adminService.deleteCarousal(
      id,
      (res:any)=>{
  
        if(res.success){
          this.commonService.showMessage(res.message);
          this.dataTable.splice(index,1);
          this.getJobOpening();
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
  

}
