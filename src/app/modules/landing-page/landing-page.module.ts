import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRouter } from './landing-page.routing';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRouter
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
