import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl,FormGroup, FormBuilder,FormArray } from '@angular/forms';
import { AdminService } from '../../admin.service';
import {CommonService} from './../../../shared/index.shared';

@Component({
  selector: 'app-add-hiperhire-points',
  templateUrl: './add-hiperhire-points.component.html',
  styleUrls: ['./add-hiperhire-points.component.scss']
})
export class AddHiperhirePointsComponent implements OnInit {

  // DropDownItems: { name: any; }[];
  hyperHireData: any [] = [];
  getdata: any;
  showHIdeButton=false;
  DialogAppliedBtn:boolean =false;
  dialogDropdown:boolean =true;
  dialogData: { title: any; }[];
  dialogrulesData;
  addData =[];
  addHyperHirePoints =[];
  hyperhireCriteriaID;
  request;
  inputData;
  userId;


  arrayInputs = [{rules : ''}];
  formName =this.fb.group({
    skills: new FormControl(''),
    controllerArray: this.fb.array([])
  })   

  
  constructor(
    public dialogRef: MatDialogRef<AddHiperhirePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private AdminService:AdminService, private fb: FormBuilder, private commonService:CommonService) {
      this.dialogDropdown = true;
       this.userId = data.data;
      }

  changeValue(btnID: any) {
    this.showHIdeButton =false;
    if (btnID == 1) {
      this.DialogAppliedBtn =! this.DialogAppliedBtn;
      this.dialogDropdown =! this.dialogDropdown;
    }else{
      this.DialogAppliedBtn =! this.DialogAppliedBtn;
      this.dialogDropdown =! this.dialogDropdown;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  hyperHireTable(event){
    this.hyperHireData.push(event.value);
  }

  hyperHireInput(event){  
    this.hyperHireData.push(event.value);
  }

  AddhiperhireRules(addHiperHireID){
    this.showHIdeButton = true;
    this.AdminService.getAddhiperhireRulesData(
      addHiperHireID,
      res => {
        this.dialogrulesData = res.designations.rules;
        this.hyperhireCriteriaID = res.designations.id;
      },
      err => {
        this.commonService.showError(err);
      }
    )
  }

  ngOnInit() {
    this.setArrayInputs(this.arrayInputs); 
    this.Addhiperhire();
    this.inputData ='';
  }

  Addhiperhire() {
    this.AdminService.getAddhiperhireData(
      res => {
        this.dialogData = res.designations;
      },
      err => {
        this.commonService.showError(err);
      }
    )
  }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }
  
  onKey(event) {
    this.inputData = event.target.value;
  }

  addInput() {
    if(this.formName.value.skills.trim()==null || this.formName.value.skills.trim()==''){
      this.commonService.showError("Please hyperhire point template...");
      return;
    }
    if(this.inputData.trim() ==''){
      this.commonService.showError("Please Enter Rules..");
      return;
    }

    (this.formName.get('controllerArray') as FormArray).push(this.fb.group({rules:''}));
    this.addData.push(this.inputData);
    this.inputData='';
   }   
  
  removeInput(index) {
     this.formName.controls.controllerArray["controls"].splice(index,1)
       this.addData.splice(index,1)
     }

     changeRadioButton(event,item) {
      this.addHyperHirePoints.push({"rule":item,"result":event && event.value});
    }

    addSkills(){
      if(this.inputData.trim() ==''){
        this.commonService.showError("Please Enter Rules..");
        return;
      }
      
      this.addData.push(this.inputData);
     this.request ={
      "designation": this.formName.value.skills,
      "rules":this.addData
      };
             this.AdminService.addSkills(
             this.request, 
               res => {
                 if (res.success) {   
                   this.commonService.showMessage(res.message);
                   this.dialogRef.close();
                 }else{
                  this.commonService.showError(res.message);
                 }
               },
               err => {
                this.commonService.showError(err);
               });
         }

    savePoints(){
      
     if(this.addHyperHirePoints.length != this.dialogrulesData.length){
          this.commonService.showError("Please Select All Hyperhire Point...");
          return;
        }
  
      this.AdminService.savePoints(
        {
          "hyperhirecriteria_id":this.hyperhireCriteriaID,
          "user_id":this.userId,
          "points":this.addHyperHirePoints
        }, 
          res => {
            if (res.success) {   
              this.commonService.showMessage(res.message);
              this.dialogRef.close();
            }else{
              this.commonService.showError(res.message);
            }
          },
          err => {
           this.commonService.showError(err);
          });
    }
}
