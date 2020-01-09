import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material'
import { AddHiperhirePointsComponent } from './add-hiperhire-points/add-hiperhire-points.component';
import {ShowHypehirePointsComponent} from './show-hypehire-points/show-hypehire-points.component';
import {CommonService} from './../../shared/index.shared';
import {ExcelService} from './../../shared/index.shared';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  searchText : string;
  hidebtnhyperhirePoints;
  showbtnhyperhirePoints; 
   page=1;
   slash ="/";
   dataExcel;
   searchdata;
   selected = '1';
   
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataExcel, 'User_SignUp-Data');
  }

  applyJob(id){
    this.router.navigate(['/admin/apply-job'], { queryParams: { id: id } });
  }
  
  displayedColumns: string[] = ['id', 'name', 'email', 'contact_number','notice_period','salary', 'location', 'hyperhire_points', 'Action'];
  
  constructor(private router:Router,
              private excelService:ExcelService,
              private adminService:AdminService,
              private commonService:CommonService,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.getEmployee();
  }

  sortByTableData(event){
    this.page =1;
    this.selected =event.value;
    this.getEmployee();
  }

  searchData(){
    let common ='employee';
    this.adminService.searchData(
      common,
      this.searchText,
      res=>{
        this.dataSource = res.data;
      },
      err=>{
       this.commonService.showError(err);
      }
    )
  }

  getEmployeeData(){
    this.adminService.getEmployeeData(
      this.page,
      res=>{
          this.dataExcel = res.users;
          this.exportAsXLSX();
      },
      err=>{
       this.commonService.showError(err);
      }
    )
  }

  getEmployee(){
     this.adminService.getEmployeeList(
      this.selected,
       this.page,
       res=>{
          this.dataTable = res.data;
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
    this.getEmployee();
  }

  openDialog(id): void {
    const dialogHyperHire = this.dialog.open(AddHiperhirePointsComponent, {
      width: '550px',
      height: '600px',
      data: {type: "",data:id}
    });
    dialogHyperHire.afterClosed().subscribe(result => {
      if(result != 'cancel')
        this.getEmployee();
    });
  }

  openDialoghyperPointDetails(element){
    let hyperHireData = element.hyperhire_points.points;
    const showDialogHyperHirePoints = this.dialog.open(ShowHypehirePointsComponent, {
      width: '550px',
      height: '400px',
      data: {type: "",data: hyperHireData}
    });

    showDialogHyperHirePoints.afterClosed().subscribe(result => {
      if(result != 'cancel')
        this.getEmployee();
    });
  }
}
