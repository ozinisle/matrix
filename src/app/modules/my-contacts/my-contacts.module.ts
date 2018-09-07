import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContactsLandingPageComponent } from './my-contacts-landing-page/my-contacts-landing-page.component';
import { MyContactsRouter } from './my-contacts.routing';
import { SharedModule } from '../../shared/shared.module';
import { MyContactsLandingPageService } from './my-contacts-landing-page/my-contacts-landing-page.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MyContactsRouter
  ],
  declarations: [
    MyContactsLandingPageComponent
  ],
  providers: [
    MyContactsLandingPageService
  ]
})
export class MyContactsModule { }
