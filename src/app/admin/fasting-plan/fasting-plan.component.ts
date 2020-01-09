import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material';

interface DataTable{
  title:string;
  fasting_hours:number;
  normal_hours:number;
}

@Component({
  selector: 'app-fasting-plan',
  templateUrl: './fasting-plan.component.html',
  styleUrls: ['./fasting-plan.component.scss']
})
export class FastingPlanComponent implements OnInit {

  dataTable:DataTable[] = [];
  displayedColumns :string[] =['title','fasting_hours','normal_hours','Action'];
  dataSource;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getFastingPlan();
  }

  getFastingPlan(){
     this.adminService.getFastingPlan(
       res=>{
         console.log(res);
         this.dataTable = res.fasting_plans;
         this.dataSource = new MatTableDataSource(this.dataTable);
       },
       error=>{
         console.log(error);
       }
     )
  }



}
