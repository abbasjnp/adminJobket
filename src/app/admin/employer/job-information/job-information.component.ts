import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-job-information',
  templateUrl: './job-information.component.html',
  styleUrls: ['./job-information.component.scss']
})
export class JobInformationComponent implements OnInit {

  Approveed(){
    this.router.navigate(['/admin/job-approved'])
  }
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
