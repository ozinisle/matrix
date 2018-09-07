import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoiLandingPageComponent } from './moi-landing-page/moi-landing-page.component';
import { MoiEntryComponent } from './moi-entry/moi-entry.component';
import { MoiRouter } from './moi.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MoiRouter
  ],
  declarations: [
    MoiLandingPageComponent,
    MoiEntryComponent
  ]
})
export class MoiModule { }
