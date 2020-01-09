import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material';

interface WaterTip{
  created_at: string;
  tip: string;
  updated_at: string;
}

@Component({
  selector: 'app-water-trip',
  templateUrl: './water-trip.component.html',
  styleUrls: ['./water-trip.component.scss']
})
export class WaterTripComponent implements OnInit {

  dataTable:WaterTip[] = [];
  displayedColumns :string[] =['tip','created_at','updated_at','Action'];
  dataSource;


  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getFastingPlan();
  }

  getFastingPlan(){
     this.adminService.waterTip(
       res=>{
         console.log(res);
         this.dataTable = res.exercise;
         this.dataSource = new MatTableDataSource(this.dataTable);
       },
       error=>{
         console.log(error);
       }
     )
  }

}
