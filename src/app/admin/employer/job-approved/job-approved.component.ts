import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-job-approved',
  templateUrl: './job-approved.component.html',
  styleUrls: ['./job-approved.component.scss']
})
export class JobApprovedComponent implements OnInit {
  viewApplicants(){
    this.router.navigate(['/admin/view-applicants'])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
