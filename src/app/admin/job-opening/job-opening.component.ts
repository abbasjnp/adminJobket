import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {AdminService} from './../admin.service';
import {MatTableDataSource} from '@angular/material';
import {CommonService} from './../../shared/index.shared';
import { Location, PlatformLocation } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
@HostListener('window:popstate', ['$event'])

export class JobOpeningComponent implements OnInit {
  dataTable:Array<any>=[];
  dataSource;
  totalPages;
  totalPagesc;
  searchText : string='';
  page:any =1;
  pagec;
  selected='';
  config: any;
  count;
  page1;
  stateChange = false;
  reloadFirstTime=0;
  viewJobs(id){
    this.router.navigate(['/admin/view-jobs',id]); 
  }

  displayedColumns: string[] = ['jobID', 'position', 'Designation', 'experience' , 'pdate', 'expdate', 'noapplicants', 'cname', 'location','status','edit'];
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private adminService:AdminService,
    private commonService:CommonService,
    public locationRout: Location,
    location: PlatformLocation
    ) {
      location.onPopState(() => {
        this.stateChange = true;
        window.location.reload(true);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
    this.page1 = this.route.snapshot.paramMap.get('pageNumber');

    let searchItem = localStorage.getItem('search');
    this.selected =localStorage.getItem('selectedVlaue');

    if(searchItem && this.page1){
      this.getSearchList(searchItem)
    }
    
   else if(this.page1){
         this.getJobOpening();
      }
      // else{
      //   this.getJobOpening(1); 
      // }
    }
    
  ngOnInit() {
    this.count=0;
   // this.page1 = this.route.snapshot.paramMap.get('pageNumber');
    // console.log("page1",this.page1);  
    // if(this.page1){
    //    this.page = this.page1;
    //    this.getJobOpening();
    // }
    // else{
    //   this.getJobOpening(); 
    // }
  }

  getJobOpening(event?:any){
     if(event)
     this.page1 = event;
     this.adminService.getJobOpening(
      this.selected,
      this.page1,
       res=>{
          this.dataTable = res.jobs;
          this.totalPagesc = res.total_pages;
          this.dataSource = new MatTableDataSource(this.dataTable);
          this.pageChange(true);
       },
       err=>{
        this.commonService.showError(err);
       }
     )
  }

  sortByTableData(event){
    this.page =event;
    this.selected =event.value;
    if(!this.selected){
      localStorage.removeItem('selectedVlaue');
    }
    localStorage.setItem('selectedVlaue',event.value);
    this.getJobOpening();
  }

  searchData() {
    console.log('searcData');
    this.pagec=1;
    console.log(this.pagec,"searc pagec")
    // let common ='jobs';
    // if(this.searchText == ''){
    //    this.getJobOpening();
    //    return;
    // }
    localStorage.setItem('search',this.searchText);
    this.router.navigate(['admin/job-opening',this.pagec]);
    this.getSearchList(this.searchText)
  }
  
  getSearchList(searchItem){
    this.adminService.searchData(
      'jobs',
      searchItem,
      res=>{
        console.log("search data res",res);
         if(res.success){
           console.log(res,"Ressss");
          this.totalPagesc = res.total_pages;
          localStorage.removeItem('search'); 
         }
          else
           this.totalPagesc = 1;
           this.dataSource = res.jobs;
           localStorage.removeItem('search');
          //  this.pageChange(true);
      },
      err=>{
       this.commonService.showError(err);
      }
    )
  }

  editjob(id:any){
    this.router.navigate(['admin/edit-job/'+id]);
  }
  
  pageChange(event:any){
      if(event === true){
        this.pagec = this.page1;
        this.totalPages = this.totalPagesc;
         console.log(event,"pagechange")
        //this.router.navigate(['admin/job-opening',this.pagec]);
        return;
      }
      console.log(event,"page Event")
     
      //this.pagec = this.page1;
      this.totalPages = this.totalPagesc;
      this.pagec = event;
      this.router.navigate(['admin/job-opening',this.pagec]);
      //this.getJobOpening();
     }
  // pageChange(event){
  //   //  console.log(event,"=>>>>>>>>>")
  //   //  console.log(this.page1,this.page ==event,"=>>>>>>>>>")
  //   //  if(this.page1 && this.page ==event){
  //   //     this.page=this.page1;
  //   //      console.log("if");
  //   //     this.router.navigate(['admin/job-opening',this.page]);
  //   //    // this.locationRout.replaceState(`admin/job-opening?pageNumber=${this.page}`);
  //   //  }else{
  //   //    if(this.page!=event){
  //   //      if(this.stateChange){
  //   //       console.log("stateChange");
  //   //       this.getJobOpening();
  //   //       this.page = event;
  //   //      }
  //   //      else{
  //   //       //this.page = event;
  //   //      // console.log("else2");
  //   //       if(!this.reloadFirstTime){
  //   //         console.log("firsttime");
  //   //         this.reloadFirstTime =1;
  //   //         this.page = this.page1;
  //   //         this.getJobOpening();
  //   //       }
  //   //       else{
  //   //         if(this.reloadFirstTime ==1){
  //   //           this.reloadFirstTime = 2;
  //   //         }else{
  //   //           this.page = event;
  //   //           this.router.navigate(['admin/job-opening',this.page]);
  //   //           this.getJobOpening();
  //   //         }
  //   //         console.log("else3");
  //   //         // if(!this.page1)
  //   //         // this.page = event;
  //   //         // if(this.reloadFirstTime==2 && this.page1)
  //   //         // this.page = event;
  //   //         // this.getJobOpening();
  //   //       }
  //   //      }
  //   //     //console.log("else");
  //   //    if(event!=2)
  //   //     this.router.navigate(['admin/job-opening',this.page]);
  //   //    }
  //   //    //this.locationRout.replaceState(`admin/job-opening?pageNumber=${this.page}`);     
  //   // }
  //   // this.getJobOpening();
  //   //let url:string = `admin/job-opening?pageNumber=${this.page}`
  //   //window.open(url,'_blank');
  //   //this.router.navigate(['admin/job-opening'], { queryParams: { pageNumber:this.page} });
  // }
}
