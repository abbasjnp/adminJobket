import { Component, OnInit } from '@angular/core';
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-employer-error-activity-log',
  templateUrl: './employer-error-activity-log.component.html',
  styleUrls: ['./employer-error-activity-log.component.scss']
})
export class EmployerErrorActivityLogComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    // this.commonService.showError(err);
  }

}
