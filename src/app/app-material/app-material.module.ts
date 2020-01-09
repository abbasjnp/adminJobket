import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  exports: [
    MatPaginatorModule,
    MatAutocompleteModule,
    CommonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class AppMaterialModule {}
