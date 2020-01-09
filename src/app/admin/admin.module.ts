import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import {SharedModule} from './../shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
import { CKEditorModule } from 'ckeditor4-angular';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Chart from 'fusioncharts/fusioncharts.overlappedcolumn2d'
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { AppMaterialModule} from './../app-material/app-material.module';
import { EmployeeComponent } from './employee/employee.component';
import { ApplyJobComponent } from './employee/apply-job/apply-job.component';
import { ReferPointComponent } from './employee/refer-point/refer-point.component';
import { EmployerComponent } from './employer/employer.component';
import { CompanyProfileComponent } from './employer/company-profile/company-profile.component';
import { JobInformationComponent } from './employer/job-information/job-information.component';
import { JobApprovedComponent } from './employer/job-approved/job-approved.component';
import { ViewApplicantsComponent } from './employer/view-applicants/view-applicants.component';
import { JobOpeningComponent } from './job-opening/job-opening.component';
import { ViewJobsComponent } from './job-opening/view-jobs/view-jobs.component';
import { EditJobComponent } from './job-opening/edit-job/edit-job.component';
import { EditDialogComponent } from './job-opening/edit-job/edit-dialog/edit-dialog.component';
import { AllApplicantsComponent } from './job-opening/all-applicants/all-applicants.component';
import { AddRewardComponent } from './job-opening/view-jobs/add-reward/add-reward.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { AddHiperhirePointsComponent } from './employee/add-hiperhire-points/add-hiperhire-points.component';
import { MatTable, MatTableModule } from '@angular/material';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule} from '@angular/material/radio';
import { ShowHypehirePointsComponent } from './employee/show-hypehire-points/show-hypehire-points.component';
import { ViewResumeComponent } from './employee/view-resume/view-resume.component';
import { RefferalComponent } from './refferal/refferal.component';
import { PayRewardsComponent } from './refferal/pay-rewards/pay-rewards.component';
import { UserActivityLogComponent } from './user-activity-log/user-activity-log.component';
import { EmployerActivityLogComponent } from './employer-activity-log/employer-activity-log.component';
import { UserErrorActivityLogComponent } from './user-error-activity-log/user-error-activity-log.component';
import { EmployerErrorActivityLogComponent } from './employer-error-activity-log/employer-error-activity-log.component';
import { JobCarousalsComponent } from './job-carousals/job-carousals.component';
import { AddCarousalsComponent } from './job-carousals/add-carousals/add-carousals.component';
import { WithdrawRequestComponent } from './withdraw-request/withdraw-request.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { SearchKeywordComponent } from './search-keyword/search-keyword.component';
import { SnsUserTrackingComponent } from './sns-user-tracking/sns-user-tracking.component';
import { SnsUserDetailsComponent } from './sns-user-details/sns-user-details.component';
import { UserPreferenceComponent } from './user-preference/user-preference.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { NeuvooSourceComponent } from './neuvoo-source/neuvoo-source.component';
import { FastingPlanComponent } from './fasting-plan/fasting-plan.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WaterTripComponent } from './water-trip/water-trip.component';
import { UsersComponent } from './users/users.component';
import { FoodComponent } from './food/food.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ExercisesComponent } from './exercises/exercises.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme,Chart);
const adminRoutes:Routes=[
  {   
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path:'users',component:UsersComponent},
      { path: 'fasting-plan', component:FastingPlanComponent },
      { path:'food',component:FoodComponent},
      {path:'exercises',component:ExercisesComponent},
      { path: 'exercise', component:ExerciseComponent },
      { path: 'water_trip', component:WaterTripComponent },
      { path: 'employee', component:EmployeeComponent },
      { path: 'apply-job', component:ApplyJobComponent },
      { path: 'refer-point', component:ReferPointComponent },
      { path: 'employer', component:EmployerComponent },
      { path: 'company-profile', component:CompanyProfileComponent },
      { path: 'job-information', component:JobInformationComponent },
      { path: 'job-approved', component:JobApprovedComponent },
      { path: 'view-applicants', component:ViewApplicantsComponent },
      // { path: 'job-opening', component:JobOpeningComponent },
      { path: 'job-opening/:pageNumber', component:JobOpeningComponent },
      { path: 'neuvoo-source', component:NeuvooSourceComponent },
      { path: 'applicants', component:ApplicantComponent },
      { path:'edit-job/:id',component:EditJobComponent},
      { path: 'referal', component: RefferalComponent },
      { path:'sns-user-tracking',component:SnsUserTrackingComponent},
      {path: 'sns-user-details', component:SnsUserDetailsComponent},
      {path: 'user-preference', component:UserPreferenceComponent},
      { path: 'job-carousals', component: JobCarousalsComponent },
      { path: 'withdraw-request', component: WithdrawRequestComponent },
      { path: 'transaction-history', component: TransactionHistoryComponent },
      { path: 'view-jobs/:id', component:ViewJobsComponent },
      { path: 'all-applicants/:id', component:AllApplicantsComponent },
      { path: 'addhiper', component:AddHiperhirePointsComponent }, 
      { path: 'view-resume/:id',  component: ViewResumeComponent},
      { path: 'activitylog/user-activity',  component: UserActivityLogComponent},
      { path: 'activitylog/employer-activity',  component: EmployerActivityLogComponent},
      { path: 'errorlog/user-activity',  component: UserErrorActivityLogComponent},
      { path: 'errorlog/employer-activity',  component: EmployerErrorActivityLogComponent},
      { path:'user-search-keywords', component: SearchKeywordComponent},
    ]
  }
]
@NgModule({
  declarations: [AdminComponent,
                 DashboardComponent, 
                 EmployeeComponent, 
                 ApplyJobComponent, 
                 ReferPointComponent, 
                 EmployerComponent, 
                 CompanyProfileComponent, 
                 JobInformationComponent, 
                 JobApprovedComponent, 
                 ViewApplicantsComponent, 
                 JobOpeningComponent, 
                 ViewJobsComponent, 
                 AllApplicantsComponent, 
                 AddRewardComponent, 
                 AddHiperhirePointsComponent, 
                 ShowHypehirePointsComponent, 
                 ViewResumeComponent, 
                 RefferalComponent, 
                 PayRewardsComponent, 
                 UserActivityLogComponent, 
                 EmployerActivityLogComponent, 
                 UserErrorActivityLogComponent, 
                 EmployerErrorActivityLogComponent, 
                 JobCarousalsComponent, 
                 AddCarousalsComponent, 
                 WithdrawRequestComponent, 
                 TransactionHistoryComponent,
                 EditJobComponent,
                 EditDialogComponent,
                 SearchKeywordComponent,
                 SnsUserTrackingComponent,
                 SnsUserDetailsComponent,
                 UserPreferenceComponent,
                 ApplicantComponent,
                 NeuvooSourceComponent,
                 FastingPlanComponent,
                 ExerciseComponent,
                WaterTripComponent,
                FoodComponent,
                FeedbacksComponent,
                ExercisesComponent,UsersComponent
                ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    FusionChartsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatRadioModule,
    CKEditorModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      maxPercent: 10000,
      space: -10,
      title: "UI",
      titleColor: "#444444",
      showSubtitle: false,
      outerStrokeGradient: true,
      outerStrokeWidth: 9,
      outerStrokeColor: "#53a9ff",
      outerStrokeGradientStopColor: "#53a9ff",
      innerStrokeColor: "#e7e8ea",
      innerStrokeWidth: 9,
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: true,
      startFromZero: true,
      responsive: false,
      outerStrokeLinecap: "butt",
     }),

    RouterModule.forChild(adminRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDaLbF_O16W2P8MU_8njS0YYFyitcOcjIw'
    }),
    AgmDirectionModule
  ],
  entryComponents:[AddRewardComponent,
                    AddHiperhirePointsComponent,
                    ShowHypehirePointsComponent,
                    PayRewardsComponent,
                    AddCarousalsComponent,
                    EditDialogComponent]

})
export class AdminModule {
  constructor(){

  }
 }
