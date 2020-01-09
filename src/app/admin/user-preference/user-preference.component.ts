import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource, MatDialog} from '@angular/material'
import {CommonService} from './../../shared/index.shared';
import {ExcelService} from './../../shared/index.shared';
@Component({
  selector: 'app-user-preference',
  templateUrl: './user-preference.component.html',
  styleUrls: ['./user-preference.component.scss']
})
export class UserPreferenceComponent implements OnInit {
  page=1;
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  selected;
  dataExcel;
  displayedColumns: string[] = ['email', 'category', 'location','promotional_mail'];
  constructor(private router:Router,
    private adminService:AdminService,
    private commonService:CommonService,
    private excelService:ExcelService,
    public dialog:MatDialog) { }

  ngOnInit() {
    this.getUserPreferenceData()
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFileUserPreference(this.dataExcel, 'User_Preference-Data');
  }
  
  getUserPreferenceExportData(){
    this.adminService.getUserPreferenceExportData(
      this.page,
      res=>{
          this.dataExcel = res.user_preference;
          this.exportAsXLSX();
      },
      err=>{
       this.commonService.showError(err);
      }
    )
  }

  getUserPreferenceData(){
    this.adminService.getUserPreferenceData(
    this.page,
    res=>{
       this.dataTable = res.user_preference;
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
    this.getUserPreferenceData();
  }

  goTOUserDetails(userpreferenceData){
    this.router.navigate(['/admin/apply-job'], { queryParams: { id: userpreferenceData.user_id } });
  }
}
