import { Component, OnInit } from '@angular/core';
import {CommonService} from './../../shared/index.shared';

@Component({
  selector: 'app-employer-activity-log',
  templateUrl: './employer-activity-log.component.html',
  styleUrls: ['./employer-activity-log.component.scss']
})
export class EmployerActivityLogComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    // this.commonService.showError(err);
  }

}
