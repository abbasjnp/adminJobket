import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from './../admin.service';
import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ProgressBardata: {}[];
  width = 500;
  height = 290;
  type = "overlappedcolumn2d";
  dataFormat;
  totalReferrals;  
  dataSource;
  dashboardData;
  notifications;
  picUrl;
  data;
  applicants;
  totalApplicants;
  totalOffers;
  //table data
  arrUser: any[];
  dataSources;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  colDefs = [
    {
      name: 'company_name',
      displayName: 'Company',
      width: '80px'
    },
    {
      name: 'designation',
      displayName: 'Opening Name',
      width: '100px'
    },
    {
      name: 'posted_date',
      displayName: 'Posted Date',
      width: '90px'
    },
    {
      name: 'expire_date',
      displayName: 'Expire Date',
      width: '100px'
    },
    {
      name: 'location',
      displayName: 'Location',
      width: '100px'
    }
  ];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  heading: any;
  years: Array<Object>;
  // yearFilter={
  //   id:null,
  //   year:null
  // }
  yearFilter;

  constructor(private router: Router,
    private httpService: HttpClient,
    private adminService: AdminService) {

    this.years = [
      // { id: null, year: 'Select Year' },
      { id: 0, year: 2019 },
      { id: 1, year: 2020 },
      { id: 2, year: 2021 },
      { id: 3, year: 2022 },
      { id: 4, year: 2023 },
    ]
  this.yearFilter = this.years[0];
  }
  ngOnInit() {
    this.displayedColumns = this.colDefs.map(c => c.name);
    // this.createTable();
    this.picUrl = environment.baseUrl;
    this.getDashboardData();
    this.yearFilter.year=2019;
    this.yearSelected();
  }
  // createTable() {
  //   this.httpService.get('./assets/jobdetails.json').subscribe(
  //     data => {
  //       this.arrUser = data as any[];	 // FILL THE ARRAY WITH DATA
  //       this.dataSources = new MatTableDataSource(this.arrUser);
  //       this.dataSources.paginator = this.paginator;
  //     },
  //   );
  // }
  getDashboardData() {
    this.adminService.getDashboardData(
      (res: any) => {
        this.dashboardData = res;
        this.notifications = res.job_apllicants;
        this.dataSources = new MatTableDataSource(res.jobs);
        this.ProgressBardata = [{

          "title": res.total_registered_users,
          "percentage": 100,
          "titleColor": "#2dbb3f",
          "outerStrokeColor": "#2dbb3f",
          "outerStrokeGradientStopColor": "#2dbb3f",
          "innerStrokeColor": "#e7e8ea",
          "heading": "User Registration"
        },
        {
          "title": res.total_active_users,
          "percentage": 100,
          "titleColor": "#fe3b60",
          "outerStrokeColor": "#fe3b60",
          "outerStrokeGradientStopColor": "#fe3b60",
          "innerStrokeColor": "#e7e8ea",
          "heading": "Verified User"

        },
        {
          "title": res.total_job_referrals,
          "percentage": 100,
          "titleColor": "#0984f4",
          "outerStrokeColor": "#0984f4",
          "outerStrokeGradientStopColor": "#0984f4",
          "innerStrokeColor": "#e7e8ea",
          "heading": "Referral Job"

        },
        {
          "title": res.total_job_applicatns,
          "percentage": 100,
          "titleColor": "#fea001",
          "outerStrokeColor": "#fea001",
          "outerStrokeGradientStopColor": "#fea001",
          "innerStrokeColor": "#e7e8ea",
          "heading": "Job Applied"

        }]
      },
      err => {
        console.log(err, "error ");
      }
    )
  }


  yearSelected() {
    this.adminService.filterApplicantsByYear(
      this.yearFilter.year,
      res => {
        this.applicants = res.months;
        this.totalApplicants = res.total_apllicants;
        this.totalOffers = res.total_offers;
        this.totalReferrals = res.total_referrals;
        setTimeout(() => {
          this.dataSource = {
            chart: {
              caption: "",
              subcaption: "",
              yaxisname: "",
              numberprefix: "",
              drawcrossline: "",
              theme: "fusion",
              showvalues: "0",
              yaxismaxvalue: this.totalApplicants,
              palettecolors: "#eaebec",
              //   xAxisNamePadding:"100"
              //   yAxisNamePadding:"1000"
              //   canvasPadding: "300"
              //   valuePadding: "100"
              //   labelPadding: "1000"
              //   yAxisValuesPadding: "200"
              //   usePlotGradientColor: "1",
              // plotGradientColor: "#fda408, #e43302",
            },
            categories: [
              {
                category: [
                  {
                    label: "Jan"
                  },
                  {
                    label: "Feb"
                  },
                  {
                    label: "March"
                  },
                  {
                    label: "April"
                  },
                  {
                    label: "May"
                  },
                  {
                    label: "June"
                  },
                  {
                    label: "July"
                  },
                  {
                    label: "Aug"
                  },
                  {
                    label: "Sept"
                  },
                  {
                    label: "Oct"
                  },
                  {
                    label: "Nov"
                  },
                  {
                    label: "Dec"
                  },
                ]
              }
            ],
            dataset: [
              {
                data: [
                  {
                    value:this.totalApplicants,
                  },
                  {
                    value:this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value:this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                  {
                    value: this.totalApplicants
                  },
                ]
              },
              {
                data: [
                  {
                    value: this.applicants[1],
                    color: "#fda408, #e43302",
                  },
                  {
                    value:this.applicants[2],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[3],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[4],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[5],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[6],
                    color: "#fda408, #e43302"
                  },
                  {
                    value:this.applicants[7],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[8],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[9],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[10],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[11],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[12],
                    color: "#fda408, #e43302"
                  },
                  {
                    value:this.applicants[1],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[1],
                    color: "#fda408, #e43302"
                  },
                  {
                    value: this.applicants[1],
                    color: "#fda408, #e43302"
                  }
                ]
              }
            ]
          };
         this.dataFormat = "json";
        }, 100);
       

      },
      err => {
        console.log(err);
      }
    )
  }
}