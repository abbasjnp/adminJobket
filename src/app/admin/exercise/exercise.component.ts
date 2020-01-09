import { Component, OnInit } from '@angular/core';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material';
import {environment} from './../../../environments/environment'
interface Fasters{
duration: number
exercise_icon: string
exercise_image: string
id: number
is_active: boolean
met: string
l}
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html', 
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  dataTable:Fasters[]=[];
  displayedColumns :string[] =['title','exercise_icon','exercise_image','met','duration','is_active','Action'];
  dataSource;
  baseUrl = environment.baseUrlImg;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.getExercises();
   
  }
   getExercises(){
     this.adminService.exerciseList(
       res=>{
         this.dataTable = res.fasters
         this.dataSource = new MatTableDataSource(this.dataTable)
       },
       err=>{
         console.log(err);
       }
     )
   }
}
