import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material'
import{Router} from '@angular/router'
import {CommonService} from './../../shared/index.shared';
import {ExcelService} from './../../shared/index.shared';
import {EllipsisPipe} from './../../shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
  providers:[ EllipsisPipe ]
})

export class EmployerComponent implements OnInit {
   page =1;
   totalPages;
   searchText : string;
   selected = '1';
   dataExcel;

   exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataExcel, 'Employer_SignUp-Data');
  }

  companyProfile(id){
    this.router.navigate(['/admin/company-profile'], { queryParams: { id: id } });
  }

  displayedColumns: string[] = ['companyID', 'companyname', 'IndustryType', 'CompanyType' , 'OfficeAddress', 'email', 'Contactnumber', 'accountstatus', 'hyperservice'];
  dataTable:Array<any>=[];
  dataSource;

  constructor(private router:Router,private excelService:ExcelService,private adminService:AdminService,private commonService:CommonService) { }
  
  ngOnInit() {
    this.getEmployerList();
  }

  getEmployerList(){
    this.adminService.getEmployerList(
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

 sortByTableData(event){
  this.page =1;
  this.selected =event.value;
  this.getEmployerList()
}

 searchData() {
  let common ='employer';
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

 pageChange(event){
  this.page = event;
  this.getEmployerList();
}

getEmployerData(){
  this.adminService.getEmployerData(
    this.page,
    res=>{
        this.dataExcel = res.employers;
        console.log(this.dataExcel,"pkkkkkkkkkkkkk");
        this.exportAsXLSX();
    },
    err=>{
     this.commonService.showError(err);
    }
  )
}

}
