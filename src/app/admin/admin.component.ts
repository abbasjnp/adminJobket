import { Component, OnInit } from '@angular/core';
import {AuthService} from './../core/auth/auth.service';
       

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public user: any;
  public navs: any;
  alerts = [];
  alertCount = 0;
  alertsInterval: any;
  constructor() {
    this.navs = [
      {
        title: 'Dashboard',
        class: 'dashboard',
        url: '/admin/dashboard',
        icon: '../../../assets/icons/dashboard.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Users',
        class: 'dashboard',
        url: '/admin/users',
        icon: '../../../assets/icons/dashboard.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Fasting Plans',
        class: 'employee',
        url: '/admin/fasting-plan/',
        icon: '../../../assets/icons/employee.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Food',
        class: 'employee',
        url: '/admin/food/',
        icon: '../../../assets/icons/employee.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Exercise',
        class: 'employee',
        url: '/admin/exercise/',
        icon: '../../../assets/icons/employee.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Water Trip',
        class: 'employee',
        url: '/admin/water_trip/',
        icon: '../../../assets/icons/employee.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      {
        title: 'Exercises',
        class: 'employee',
        url: '/admin/exercises/',
        icon: '../../../assets/icons/employee.png',
        enable: true,
        visible: true,
        subNavs: []
      },
      // {
      //   title: 'Employee',
      //   class: 'employee',
      //   url: '/admin/employee',
      //   icon: '../../../assets/icons/employee.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Employer',
      //   class: 'employer',
      //   url: '/admin/employer',
      //   icon: '../../../assets/icons/employer.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Job Opening',
      //   class: 'jobopening',
      //   url: '/admin/job-opening/1',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Applicants',
      //   class: 'applicants',
      //   url: '/admin/applicants',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Referral',
      //   class: 'referal',
      //   url: '/admin/referal',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Sns User Tracking',
      //   class: 'snsusertracking',
      //   url: '/admin/sns-user-tracking',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // // {
      // //   title: 'Neuvoo Source',
      // //   class: 'jobopening',
      // //   url: '/admin/neuvoo-source',
      // //   icon: '../../../assets/icons/jobopening.png',
      // //   enable: true,
      // //   visible: true,
      // //   subNavs: []
      // // },
      // {
      //   title: 'User Preference',
      //    class: 'userpreference',
      //    url: '/admin/user-preference',
      //    icon: '../../../assets/icons/jobopening.png',
      //    enable: true,
      //    visible: true,
      //    subNavs: []
      //  },
      // {
      //   title: 'Job-Search-Keyword',
      //   class: 'referal',
      //   url: '/admin/user-search-keywords',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      // {
      //   title: 'Activity Log',
      //   class: 'activitylog',
      //   url: '/admin/activitylog',
      //   icon: '../../../assets/icons/activity.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: [
      //     {
      //       title: 'User Log',
      //       // class: 'useractivity',
      //       url: '/admin/activitylog/user-activity',
      //       // icon: '../../../assets/icons/jobopening.png',
      //       enable: true,
      //       visible: true,
      //       subNavs: []
      //     },
      //     // {
      //     //   title: 'Employer Log',
      //     //   // class: 'employeractivity',
      //     //   url: '/admin/activitylog/employer-activity',
      //     //   // icon: '../../../assets/icons/jobopening.png',
      //     //   enable: true,
      //     //   visible: true,
      //     //   subNavs: []
      //     // }
      //   ]
      // },
      // {
      //   title: 'Error Log',
      //   class: 'errorlog',
      //   url: '/admin/errorlog',
      //   icon: '../../../assets/icons/error.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: [
      //     {
      //       title: 'User Log',
      //       // class: 'useractivity',
      //       url: '/admin/errorlog/user-activity',
      //       // icon: '../../../assets/icons/jobopening.png',
      //       enable: true,
      //       visible: true,
      //       subNavs: []
      //     },
      //     // {
      //     //   title: 'Employer Log',
      //     //   // class: 'employeractivity',
      //     //   url: '/admin/errorlog/employer-activity',
      //     //   // icon: '../../../assets/icons/jobopening.png',
      //     //   enable: true,
      //     //   visible: true,
      //     //   subNavs: []
      //     // }
      //   ]
      // },
      //  {
      //   title: 'Withdraw',
      //   class: 'referal',
      //   url: '/admin/withdraw-request',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
      //  {
      //   title: 'Transaction',
      //   class: 'referal',
      //   url: '/admin/transaction-history',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // }, 
      // {
      //   title: 'Job Carousals',
      //   class: 'referal',
      //   url: '/admin/job-carousals',
      //   icon: '../../../assets/icons/jobopening.png',
      //   enable: true,
      //   visible: true,
      //   subNavs: []
      // },
     
    ];
  }

  ngOnInit() {
    
  }

  markAsRead(event) {}
  ngOnDestroy() {}
}



