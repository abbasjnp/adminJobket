import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { AdminService } from '../../admin.service';
import {environment} from './../../../../environments/environment';
import {CommonService} from './../../../shared/index.shared';
import {Location} from '@angular/common';

@Component({
    selector: 'app-view-resume',
    templateUrl: './view-resume.component.html',
    styleUrls: ['./view-resume.component.scss']
  })
export class ViewResumeComponent implements OnInit {
  userProfile;
  userProfileResume;
  userTotalExperience;
  id;
  public _baseurl = environment.baseUrl;
  constructor(private adminService:AdminService, private _Activatedroute:ActivatedRoute,private _location: Location,private commonService:CommonService) { }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    this.adminService.viewResume(
      this.id,
        res => {
          this.userProfile= res.user_profile;
          this.userProfileResume =res.user_resume;
          this.userTotalExperience = res.user_total_experience;
        },
        err => {
         
        }
      )
    }
    backClicked() {
      this._location.back();
    }
  

}
