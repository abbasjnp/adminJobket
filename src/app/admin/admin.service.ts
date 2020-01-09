import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { DataService } from './../core/http/data.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + localStorage.getItem('token')
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = environment.baseUrl + 'cms/'
  private _urlallAplicants = environment.baseUrl + 'employer/'
  private _viewProfilrurl = environment.baseUrl;
  private _authUrl = environment.baseUrl + 'authentication/';

  public url = environment.baseUrl + "adminpanel/"

  currentPage;
  constructor(private http: HttpClient, private dataService: DataService) { }

  public getFastingPlan(successCall, errorCall) {
    this.dataService.get(this.url + 'fasting-plan/').subscribe(
      (res: any) => {
        if (res)
          successCall(res);
        else
          errorCall(res.error)
      }
    )
  }
  public exerciseList(successCall, errorCall) {
    this.dataService.get(this.url + 'exercise/').subscribe(
      (res: any) => {
        if (res)
          successCall(res);
        else
          errorCall(res.error)
      }
    )
  }
  public waterTip(successCall, errorCall) {
    this.dataService.get(this.url + 'watertip/').subscribe(
      (res: any) => {
        if (res)
          successCall(res);
        else
          errorCall(res.error)
      }
    )
  }

  public getUsers(successCall,errorCall){
      this.dataService.get(this.url +'users').subscribe(
         (res:any) =>successCall(res),
         error=>errorCall(error)
      )
  }







  //--------withdraw-request-------//
  public getWithdraw_Req_List(page, successCall, errorCall) {
    this.dataService.get(this._url + 'withdrawal-request/?page=' + page).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    )
  }
  //
  //--------transaction-history-------//
  public getTransaction_history(page, successCall, errorCall) {
    this.dataService.get(this._url + 'transaction-history/?page=' + page).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    )
  }
  //-----------Search-keyword-------------//
  public get_User_Search_Keyword(page, successCall, errorCall) {
    this.dataService.get(this._url + 'user-search-keyword/?page=' + page).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    )
  }
  //-------------------------------------//
  public withdrawalPay(data, successCall, errorCall) {

    this.dataService.post(this._url + 'withdrawal-request/', data).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }

  public getEmployeeList(data, page, successCall, errorCall) {
    this.dataService.get(this._url + 'employee/' + '?sort=' + data + '&page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getEmployeeData(page, successCall, errorCall) {
    this.dataService.get(this._url + 'user-csv/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getUserPreferenceExportData(page, successCall, errorCall) {
    this.dataService.get(this._url + 'user-preferencep-csv/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getEmployerData(page, successCall, errorCall) {
    // https://api.jobket.in/cms/employer-csv/
    this.dataService.get(this._url + 'employer-csv/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getJobOpening(data, page, successCall, errorCall) {
    if (data == undefined) {
      var url = this._url + 'jobs/?page=' + page
    } else {
      var url = this._url + 'jobs/' + '?sort=' + data + '&page=' + page
    }
    this.dataService.get(url).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getAllAplicants(page, successCall, errorCall) {
    this.dataService.get(this._url + 'get-all-applicants/?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getJobSlider(successCall, errorCall) {
    this.dataService.get(this._url + 'job-slider').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getViewJob(id, successCall, errorCall) {
    this.dataService.get(this._url + 'jobs/' + id + '/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public approveJob(id, successCall, errorCall) {
    this.dataService.get(this._url + 'job-approve/' + id + '/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public disaaproveJob(id, successCall, errorCall) {
    this.dataService.get(this._url + 'job-disapprove/' + id + '/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getEmployerList(data, page, successCall, errorCall) {
    this.dataService.get(this._url + 'employer/' + '?sort=' + data + '&page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public allApplicants(id, successCall, errorCall) {
    this.dataService.get(this._urlallAplicants + 'apllicants/' + id + '/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public addReward(data, successCall, errorCall) {
    this.dataService.postToken(this._url + 'add-job-reward/', data).subscribe(
      (res: any) => {
        if (res) {

          successCall(res);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }

  public changeJobStatus(data, successCall, errorCall) {
    this.dataService.postToken(this._urlallAplicants + 'change-job-status/', data).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
        else {
          errorCall(res.error)
        }
      },
      err => {
        errorCall(err);
      }
    )
  }
  public getEmployerDetails(data, page, successCall, errorCall) {
    this.dataService.get(this._url + 'employer/' + data + '/?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public employerActivate(data, successCall, errorCall) {
    this.dataService.get(this._url + 'approve/' + data).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public employerDeactivate(data, successCall, errorCall) {
    this.dataService.get(this._url + 'disapprove/' + data).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public changeHyperStatus(hyperData, successCall, errorCall) {

    this.dataService.post(this._url + 'change-hyperhire-status/', hyperData).subscribe(
      (res: any) => {
        if (res) {

          successCall(res);
        } else {

          errorCall(res.error);
        }
      },
      err => {

        errorCall(err);
      }
    );
  }

  public addCarousal(data, successCall, errorCall) {
    this.dataService.post(this._url + 'job-slider/', data).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }
  getDashboardData(successCall, errorCall) {
    this.dataService.get(this._url + 'admin-dashboard/').subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
        else {
          errorCall(res.err);
        }
      },
      err => {
        errorCall(err);
      }
    )
  }

  public filterApplicantsByYear(year, successCall, errorCall) {
    this.dataService.get(this._url + 'admin-dashboar-graph/?year=' + year).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  //view Applicants Status Api 
  public changeStatus(statusData, successCall, errorCall) {
    this.dataService.post(this._urlallAplicants + 'change-applicant-status/', statusData).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
        else {
          errorCall(res.error)
        }
      },
      err => {
        errorCall(err);
      }
    )
  }

  public updateCarousal(id, data, successCall, errorCall) {
    this.dataService.put(this._url + 'job-slider/' + id + '/', data).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        } else {
          errorCall(res.error);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }
  public deleteCarousal(id, successCall, errorCall) {
    this.dataService.delete(this._url + 'job-slider/' + id).subscribe(
      (res: any) => {
        if (res) {

          successCall(res);
        } else {

          errorCall(res.error);
        }
      },
      err => {
        // this.loggedIn.next(false);
        errorCall(err);
      }
    );
  }

  //============================== Apply Job ================================

  public getApplyJobList(id, successCall, errorCall) {                     //profile
    this.dataService.get(this._url + 'employee/' + id).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getApplyJobTable(id, page, successCall, errorCall) {                     //table 
    this.dataService.get(this._url + 'employee-applied-jobs/' + id + '?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  //============================== Apply Job ================================

  public getApplyReferTable(id, page, successCall, errorCall) {                     //table 
    this.dataService.get(this._url + 'employee-referred-jobs/' + id + '?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getAddhiperhireData(successCall, errorCall) {
    this.dataService.get(this._url + 'hyperhyper-criteria/').subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getAddhiperhireRulesData(addHiperHireID, successCall, errorCall) {
    this.dataService.get(this._url + 'hyperhyper-criteria/' + addHiperHireID).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public addSkills(obj, successCall, errorCall) {
    this.dataService.post(this._url + 'hyperhyper-criteria/', obj).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }

  public savePoints(obj, successCall, errorCall) {
    this.dataService.post(this._url + 'hyper-hire-points/', obj).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }

  public viewResume(id, successCall, errorCall) {
    this.dataService.get(this._viewProfilrurl + 'user/get-user-info/v2/?id=' + id).subscribe(
      (res: any) => {
        successCall(res);
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getReferral(page, successCall, errorCall) {
    this.dataService.get(this._url + 'all-jobs-applicants/?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getSnsUserTrackingData(data, page, successCall, errorCall) {
    if (data == undefined) {
      var url = this._url + 'user-shared-job/?page=' + page
    } else {
      var url = this._url + 'user-shared-job/' + '?filter=' + data + '&page=' + page
    }
    this.dataService.get(url).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getUserPreferenceData(page, successCall, errorCall) {
    this.dataService.get(this._url + 'user-preference/?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getSnsUserDetailsData(id, page, successCall, errorCall) {
    // if(data==undefined){
    //   var url=this._url +'user-shared-job/?page='+page
    // }else{
    //   var url=this._url +'user-shared-job/'+'?filter='+data+'&page='+page
    // }
    this.dataService.get(this._url + 'user-shared-job/' + id + '?page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getPayRewards(id, successCall, errorCall) {
    this.dataService.get(this._url + 'user-add-reward/' + id).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public payReward(obj, successCall, errorCall) {
    this.dataService.post(this._url + 'user-add-reward/', obj).subscribe(
      (res: any) => {
        if (res) {
          successCall(res);
        }
      },
      err => {
        errorCall(err);
      }
    );
  }

  public postUserActivityLog(searchKey: any, page, successCall, errorCall) {
    this.dataService.post(this._url + 'user-activity-log/?page=' + page, searchKey).subscribe(
      (res: any) => {
        if (res) {
          successCall(res)
        }
        else {
          errorCall(res)
        }
      },
      err => {
        errorCall(err);
      }
    )
  }

  //add function for post search in error log
  public postErrorLog(searchKey: any, page, successCall, errorCall) {
    this.dataService.post(this._url + 'user-error-log/?page=' + page, searchKey).subscribe(
      (res: any) => {
        if (res) {
          successCall(res)
        }
        else {
          errorCall(res)
        }
      },
      err => {
        errorCall(err);
      }
    )
  }

  public searchData(urlname, data, successCall, errorCall) {
    this.dataService.get(this._url + urlname + '/?search=' + data).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }

  public getNeuvooApplicants(data, page, successCall, errorCall) {

    this.dataService.get(this._url + 'get-neuvoo-applicants/' + '?sort=' + data + '&page=' + page).subscribe(
      (res: any) => {
        successCall(res)
      },
      err => {
        errorCall(err);
      }
    )
  }
  /*    public getDesignationList(data,successCall,errorCall){
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
    }*/
}
