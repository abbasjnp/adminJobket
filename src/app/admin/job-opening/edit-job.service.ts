import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient,HttpHeaders, HttpEventType} from '@angular/common/http';
import {environment} from './../../../environments/environment';
import {DataService} from './../../core/index.core';

@Injectable({
  providedIn: 'root'
})
export class EditJobService {

   private _url = environment.baseUrl + 'employer/';
  private _viewProfilrurl = environment.baseUrl

  // private _localUrl = environment.baseUrl + 'employer/';

  // private _url = environment.baseUrl + 'employer/';
  private _authUrl = environment.baseUrl + 'authentication/'
  constructor(private http:HttpClient,
              private dataService:DataService) { }

              httpOptions={
                headers:new HttpHeaders({
                   "Content-Type": "application/json",
                   "Authorization":'Bearer '+localStorage.getItem('token')
                })
              }
      public getDesignationList(data,successCall,errorCall){
    this.dataService.get(this._authUrl  + 'designations/?designation='+data).subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )
  }
  public getCategoryList(successCall,errorCall){
    this.dataService.get(this._authUrl  + 'job-categories').subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )
  }
  public getSubCategoryList(id,successCall,errorCall){
    this.dataService.get(this._authUrl  + 'job-sub-categories/?category_id='+id)
    .subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )
  }

  public getLocationList(data,successCall,errorCall){
    this.dataService.get(this._authUrl + 'search-location/?location='+data).subscribe(
      (res: any) => {
        successCall(res);
        
      },
      err => {
        errorCall(err);
      }

    )
  }
  public getSkillList(data, successCall, errorCall) {
    this.dataService.get(this._authUrl + 'skills/?skill=' + data).subscribe(
      (res: any) => {
        successCall(res);
        
      },
      err => {
        errorCall(err);
      }

    )
  }
          

   public getViewJobData(id, successCall, errorCall) {
    this.dataService.get(this._url + 'job/' + id).subscribe(
      (res: any) => {
        successCall(res);   
      },
      err => {
        errorCall(err);
      }
    )
    }  

  public postViewJobData(data, successCall, errorCall) {
    this.dataService.post(this._url + 'job-update/', data).subscribe(
      (res: any) => {
        successCall(res);
        
      },
      err => {
        errorCall(err);
      }

    )

  }
  public editRequirement(id,data, successCall, errorCall) {
    this.dataService.put(this._url + 'job-requirement/'+id+'/', data).subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )

  }
  public removeRequirement(id,successCall,errorCall){
      this.dataService.delete(this._url + 'job-requirement/'+id+'/').subscribe(
        (res:any)=>{
           successCall(res)
        },
        err=>{
            errorCall(err)
        }
      )
  }

  public addRequirement(data,successCall,errorCall){
    this.dataService.post(this._url+ 'job-requirement/',data).subscribe(
      (res:any)=>{
         successCall(res)
      },
      err=>{
          errorCall(err)
      }
    )
  }

  //Desired Qualification Api//
    public edit_d_qualification(id,data, successCall, errorCall) {
    this.dataService.put(this._url + 'job-desired-requirement/'+id+'/', data).subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )

  }
  public remove_d_qualification(id,successCall,errorCall){
      this.dataService.delete(this._url + 'job-desired-requirement/'+id+'/').subscribe(
        (res:any)=>{
           successCall(res)
        },
        err=>{
            errorCall(err)
        }
      )
  }

  public add_d_qualification(data,successCall,errorCall){
    this.dataService.post(this._url+ 'job-desired-requirement/',data).subscribe(
      (res:any)=>{
         successCall(res)
      },
      err=>{
          errorCall(err)
      }
    )
  }
   //Jobs Questions Api//
    public edit_job_questions(id,data, successCall, errorCall) {
    this.dataService.put(this._url + 'job-question/'+id+'/', data).subscribe(
      (res: any) => {
        successCall(res);
       
      },
      err => {
        errorCall(err);
      }

    )

  }
  public remove_job_questions(id,successCall,errorCall){
      this.dataService.delete(this._url + 'job-question/'+id+'/').subscribe(
        (res:any)=>{
           successCall(res)
        },
        err=>{
            errorCall(err)
        }
      )
  }

  public add_job_questions(data,successCall,errorCall){
    this.dataService.post(this._url+ 'job-question/',data).subscribe(
      (res:any)=>{
         successCall(res)
      },
      err=>{
          errorCall(err)
      }
    )
  }         
}
