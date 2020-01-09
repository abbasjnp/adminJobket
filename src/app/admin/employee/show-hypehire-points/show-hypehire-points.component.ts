import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-hypehire-points',
  templateUrl: './show-hypehire-points.component.html',
  styleUrls: ['./show-hypehire-points.component.scss']
})
export class ShowHypehirePointsComponent implements OnInit {
  showHyperHireData;
  constructor(public dialogRef: MatDialogRef<ShowHypehirePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.showHyperHireData = data.data;
     }

  ngOnInit() {
    
  }

}
