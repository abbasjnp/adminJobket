import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router:Router,private snackBar:MatSnackBar) { }


  public showMessage(msg) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'back-green'
    });
  }

  public showError(error) {
    this.snackBar.open(error, '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'back-red'
    });
  }


  public gotoPage(partialRouteName) {
     // debugger;
      this.router.navigate(['/admin/'+ partialRouteName]);
    
  }
}
