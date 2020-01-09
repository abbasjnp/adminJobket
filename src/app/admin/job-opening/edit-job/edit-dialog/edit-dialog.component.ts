import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditJobComponent } from '../edit-job.component';
import { EditJobService } from '../../edit-job.service';
import { environment } from 'src/environments/environment';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
// import { constants } from 'os';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  picUrl: any = environment.baseUrl;
  inputArray: Array<any> = [];
  jobdescription;
  getInputValueArray = [];
  inputData;
  newAttribute: any = {};
  categoryList: any = [];
  subCategoryList: any = [];
  skillList: Array<any> = [];
  showSkill;
  locations;
  categoryId;
  jobType;
  indexOfMaxSalary;
  maxSalaryArray;
  checked =false;
  skill = new FormControl('');
  titlePosition = new FormControl('');
  minExp = new FormControl('');
  maxExp = new FormControl('');
  minSalary = new FormControl('');
  maxSalary = new FormControl('');
  category = new FormControl('');
  sub_category = new FormControl('');
  location = new FormControl('');
  // aboutRole = new FormControl('');
  salary_description = new FormControl('');
  job_type = new FormControl('');
  skills = new FormControl('');
  description = new FormControl('');
  jobCompany = new FormControl('');
  jobRequirements = new FormControl('');
  d_qualification = new FormControl('');
  minSalaryDialog: ({ name: string; value: string; selected: boolean; } | { name: string; value: string; selected?: undefined; })[];
  maxSalaryDialog;
  constructor(
    public dialogRef: MatDialogRef<EditJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public employerService: EditJobService) {
      // this.location.setValue({location: data.data.location});

    console.log(this.data, "Data");
    // console.log( this.data.data.max_salary);
    this.maxSalaryDialog = [
      { name: '50,000', value: '50000' },
      { name: '75,000', value: '75000' },
      { name: '1,00,000', value: '100000' },
      { name: '1,25,000', value: '125000' },
      { name: '1,50,000', value: '150000' },
      { name: '1,75,000', value: '175000' },
      { name: '2,00,000', value: '200000' },
      { name: '2,25,000', value: '225000' },
      { name: '2,50,000', value: '250000' },
      { name: '2,75,000', value: '275000' },
      { name: '3,00,000', value: '300000' },
      { name: '3,25,000', value: '325000' },
      { name: '3,50,000', value: '350000' },
      { name: '3,75,000', value: '375000' },
      { name: '4,00,000', value: '400000' },
      { name: '4,25,000', value: '425000' },
      { name: '4,50,000', value: '450000' },
      { name: '4,75,000', value: '475000' },
      { name: '5,00,000', value: '500000' },
      { name: '5,50,000', value: '550000' },
      { name: '6,00,000', value: '600000' },
      { name: '6,50,000', value: '650000' },
      { name: '7,00,000', value: '700000' },
      { name: '7,50,000', value: '750000' },
      { name: '8,00,000', value: '800000' },
      { name: '8,50,000', value: '850000' },
      { name: '9,00,000', value: '900000' },
      { name: '9,50,000', value: '950000' },
      { name: '10,00,000', value: '1000000' },
      { name: '11,00,000', value: '1100000' },
      { name: '12,00,000', value: '1200000' },
      { name: '13,00,000', value: '1300000' },
      { name: '14,00,000', value: '1400000' },
      { name: '15,00,000', value: '1500000' },
      { name: '16,00,000', value: '1600000' },
      { name: '17,00,000', value: '1700000' },
      { name: '18,00,000', value: '1800000' },
      { name: '19,00,000', value: '1900000' },
      { name: '20,00,000', value: '2000000' },
      { name: '22,50,000', value: '2250000' },
      { name: '25,00,000', value: '2500000' },
      { name: '27,50,000', value: '2750000' },
      { name: '30,00,000', value: '3000000' },
      { name: '32,50,000', value: '3250000' },
      { name: '35,00,000', value: '3500000' },
      { name: '37,50,000', value: '3750000' },
      { name: '40,00,000', value: '4000000' },
      { name: '45,00,000', value: '4500000' },
      { name: '50,00,000', value: '5000000' },
      { name: '60,00,000', value: '6000000' },
      { name: '70,00,000', value: '7000000' },
      { name: '80,00,000', value: '8000000' }
    ]
    if (this.data.requirementData) {
      // console.log(this.data.requirementData.requirement);
    }
    if (this.data.data) {
      this.skillList = this.data.data.skills
      this.titlePosition.patchValue(this.data.data.title);
      this.minExp.patchValue(this.data.data.min_experience);
      if (this.data.data.max_experience) {
        this.maxExp.patchValue(this.data.data.max_experience);
      }
      else {
        this.maxExp.patchValue(null);
      }
      if (this.data.data.min_salary) {
        this.minSalary.patchValue(this.data.data.min_salary);
        for (let i = 0; i < this.maxSalaryDialog.length; i++) {
          if (this.data.data.min_salary== this.maxSalaryDialog[i].value) {
            this.indexOfMaxSalary = i+1;
            this.maxSalaryArray = this.maxSalaryDialog.slice(this.indexOfMaxSalary);
          }
        }
      }
      else {
        this.minSalary.patchValue(null);
      }
      if (this.data.data.max_salary) {
        this.maxSalary.patchValue(this.data.data.max_salary);
      }
      else {
        this.maxSalary.patchValue(null);
      }
      if (this.data.data.category) {
        this.category.patchValue(this.data.data.category.id);
      }
      else {
        this.category.patchValue(null);
      }
      if (this.data.data.sub_category)
        this.sub_category.patchValue(this.data.data.sub_category.id);
      else
        this.sub_category.patchValue(null);
      if (this.data.data.category) {
        this.categoryId = this.data.data.category.id;
      }
      if(this.data.data.continuous_recruitment === true){
        this.checked = true;
      }else{
        this.checked = false;
     }
      this.salary_description.patchValue(this.data.data.salary_description);
      this.job_type.patchValue(this.data.data.job_type);
      this.skills.patchValue(this.data.data.skills);
      this.jobCompany.patchValue(this.data.data.company_detail);
      this.description.patchValue(this.data.data.description);
      this.jobRequirements.patchValue(this.data.data.job_requirements);
      this.d_qualification.patchValue(this.data.data.d_qualification);
    }

    // console.log(this.skills, "Data")


   
    this.jobType = [
      { name: 'Full-time permanent', value: "Full-time permanent" },
      { name: 'Full-time contractual', value: 'Full-time contractual' },
      { name: 'Part-time permanent', value: 'Part-time permanent' },
      { name: 'Part-time contractual', value: 'Part-time contractual' },
      { name: 'Freelance', value: 'Freelance' }
    ]
  }
 
  selectMinSallary(event) {
    for (let i = 0; i < this.maxSalaryDialog.length; i++) {
      if (event.target.value === this.maxSalaryDialog[i].value) {
        this.indexOfMaxSalary = i + 1;
        this.maxSalaryArray = this.maxSalaryDialog.slice(this.indexOfMaxSalary);
      }
    }
  }
  handleSelected(event) {
    // if ($event.target.checked === true) {
      // this.formattedDate="2099-10-14";
      console.log(event.target.checked,"alue")
      this.checked =event.target.checked;
      // console.log($event.target.checked,"iffffff");
    // }else if($event.target.checked === false){
    //   this.checked =false;
    //   // this.formattedDate=null;
    //   // console.log($event.target.checked,"elseeeeeeee");
    // }
  }
  submitDialog() {
    console.log(this.minSalary.value,"hghgghj ",this.maxSalary.value)
    console.log("data up", this.data);
    if (this.data.requirementData) {
      console.log("data requirement", this.data);
      this.employerService.editRequirement(
        this.data.requirementData.id,
        {
          "job_requirement": this.data.requirementData.requirement
        },
        res => {
          console.log(res, "edit requirementttt");
          this.dialogRef.close();
        },
        err => {
          console.log(err, "error");
        }
      )
      return;
    }

    else if (this.data.type == 'requirement') {

      if (this.inputData != '') {
        this.getInputValueArray.push(this.inputData);
      }
      let requirementDataList = {
        id: this.data.data.id,
        job_requirements: this.getInputValueArray
      }
      this.employerService.addRequirement(
        requirementDataList,
        res => {
          console.log(res, "requirement Data List");

        },
        err => {
          console.log(err);
        }
      )
      this.dialogRef.close();
    }
    if (this.data.d_qualification) {
      this.employerService.edit_d_qualification(
        this.data.d_qualification.id,
        {
          "job_desired_requirements": this.data.d_qualification.requirement
        },
        res => {
          console.log(res, "edit requirementttt");
          this.dialogRef.close();
        },
        err => {
          console.log(err, "error");
        }
      )
      return;
    }

    else if (this.data.type == 'd_qualification') {

      if (this.inputData != '') {
        this.getInputValueArray.push(this.inputData);
      }
      let requirementDataList = {
        id: this.data.data.id,
        job_desired_requirements: this.getInputValueArray
      }
      this.employerService.add_d_qualification(
        requirementDataList,
        res => {
          console.log(res, "requirement Data List");

        },
        err => {
          console.log(err);
        }
      )
      this.dialogRef.close();
    }
    if (this.data.job_questions) {
      this.employerService.edit_job_questions(
        this.data.job_questions.id,
        {
          "job_question": this.data.job_questions.question
        },
        res => {
          console.log(res, "edit requirementttt");
          this.dialogRef.close();
        },
        err => {
          console.log(err, "error");
        }
      )
      return;
    }

    else if (this.data.type == 'job_questions') {

      if (this.inputData != '') {
        this.getInputValueArray.push(this.inputData);
      }
      let requirementDataList = {
        id: this.data.data.id,
        job_questions: this.getInputValueArray
      }
      this.employerService.add_job_questions(
        requirementDataList,
        res => {
          console.log(res, "requirement Data List");

        },
        err => {
          console.log(err);
        }
      )
      this.dialogRef.close();
    }
    else {

      let a = this.skillList.join(',');
      let reqData = {
        id: JSON.stringify(this.data.data.id),
        title: this.titlePosition.value,
        min_experience: this.minExp.value,
        max_experience: this.maxExp.value,
        min_salary: this.minSalary.value,
        max_salary: this.maxSalary.value,
        category_id: this.category.value,
        sub_category_id: this.sub_category.value,
        continuous_recruitment:this.checked,
        location: this.location.value.id,
        salary_description: this.salary_description.value,
        job_type: this.job_type.value,
        skill: a,
        company_detail: this.jobCompany.value,
        description: this.description.value,

      }
      console.log(reqData, "reqdataaaaaaaaaaaaaaaaaaaaaaaaaa");

      this.employerService.postViewJobData(
        reqData,
        res => {
          console.log(res, "res on Post Job")
          this.dialogRef.close();
        }, err => {
          console.log(err, "error")
        })
    }
    //=================Job Question===================//

    /*----------Add Requirements through the dialog---------------*/
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }

  ngOnInit() {
    if(this.data.type=='jobInformation'){
      this.location.setValue({location: this.data.data.location});
    }
    
    this.getCategory();
    this.inputArray.push(this.newAttribute); //Initialize the input boxes of Job Requirements in dialog

    this.location.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
      )
      .subscribe(location => this.getLocation(location))

    this.skill.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
      )
      .subscribe(skill => {
        this.getSkills(skill),
          console.log(skill);
      })
  }
  getCategory() {
    if (this.categoryId) {
      this.getSubCategory(this.categoryId);
    }
    this.employerService.getCategoryList(
      res => {
        console.log("category response", res);
        if (res.success) {
          this.categoryList = res.categories;
        }
      },
      err => {

      }
    )
  }
  getSubCategory(id) {
    this.employerService.getSubCategoryList(
      id,
      res => {
        console.log("category response", res);
        if (res.success) {
          this.subCategoryList = res.sub_categories;
        }
      },
      err => {

      }
    )
  }
  catValue(event) {
    let catID = event.target.value;
    this.sub_category.setValue(null);
    this.getSubCategory(catID);
  }
  subCatValue(event) {
    console.log("sub cat event");
    let catID = event.target.value;
  }

  getLocation(location) {
    this.employerService.getLocationList(
      location,
      res => {
        console.log(res);
        this.locations = res.locations;
        console.log(this.locations);

      },
      err => {
        console.log(err);
      }
    )
  }

  getSkills(skill) {
    this.employerService.getSkillList(
      skill,
      res => {
        console.log(res);
        this.skills = res.skills;
      },
      err => {
        console.log(err);
      }
    )

  }
  displayFn(user?): string | undefined {
    //  this.jobinformation.location=user.id;
    return user ? user.location : undefined;
  }

  addSkill(get) {
    if (this.showSkill.value == '') {
      return
    }
    this.skillList.push(get);
    console.log("Skill List", this.skillList)

    this.showSkill = "";
    //  console.log(this.getSkill1,"add skill")

  }

  removeSkill(index) {
    this.skillList.splice(index, 1);
    //  console.log(this.getSkill1,"on remove skill");

  }

  /*------------- Add and Remove Job Requirement Dialog-------------*/
  onKey(event) {
    console.log(event.target.value);
    this.inputData = event.target.value;

  }
  addInput(data) {
    if (this.inputData == '') {
      return;
    }
    this.inputArray.push(this.newAttribute);
    this.newAttribute = {};
    this.getInputValueArray.push(this.inputData);
    console.log(this.getInputValueArray, "final data");
    console.log(this.inputArray);
    this.inputData = '';

  }
  removeInput(index) {
    if (this.inputArray.length == 1) {
      return;
    }
    this.inputArray.splice(index, 1);

    for (let i = 0; i < this.getInputValueArray.length; i++) {
      if (i == index) {
        this.getInputValueArray.splice(i, 1);
      }
    }

  }

}
