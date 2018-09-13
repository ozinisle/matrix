import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatCardModule, MatMenuModule, MatExpansionModule, MatDialogModule,
  MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatListModule,
  MatListItem, MatDatepickerModule, MatCalendar, MatNativeDateModule, MatInputModule, MatTabsModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    NoopAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MaterialModule { }
