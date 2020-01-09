import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  cname: string;
  email: string;
  contactus: string;
  Experience:string;
  applydate:string;
  status:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  {cname: 'ABCD', email: 'abc@gmail.com', contactus: '+91 9587545', Experience: '2 year 10 months' ,  applydate:'18 May 2019', status:'shortlisted'},
  
]; 
@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.scss']
})
export class ViewApplicantsComponent implements OnInit {
  displayedColumns: string[] = ['cname', 'email', 'contactus', 'Experience', 'applydate', 'status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
