import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ɵConsole
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { DataService } from './../../core/http/data.service';
import {CommonService} from './../../shared/index.shared';
import { AuthService } from './../../core/auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name="Admin";
  user: any;
  ntfInProgress = false;
  canViewNotifications: boolean;
  @Output()
  markAsRead = new EventEmitter();

  @Input()
  alerts: any;
  @Input()
  alertCount: any;
  serviceUrl = environment.baseUrl + 'authentication/';
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private commonService: CommonService,
    private dataService: DataService
  ) {
    $(document).ready(function() {
      // Show hide popover
      $('.userbtn').click(function(event) {
        if (event.target.className !== 'mark-read') {
          $(this)
            .find('.usermenu')
            .slideToggle('fast');
        }
      });
    });
    $(document).on('click', function(event) {
      const $trigger = $('.userbtn');
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $('.usermenu').slideUp('fast');
      }
    });
    // if (this._securityService.isNotificationEnable()) {
    //   this.canViewNotifications = true;
    // } else {
    //   this.canViewNotifications = false;
    // }
    // this.getServiceList();
  }

  ngOnInit() {}

  clickMarkAsRead(alert) {
    this.markAsRead.emit(alert);
    // const data: any = {
    //   id: alert.id,
    //   is_read: true
    // };
    // this._notifyService.updateReadNotifications(
    //   data,
    //   res => {
    //     this.getNotificationsList();
    //   },
    //   err => {}
    // );
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/account/login']);
  }
}
