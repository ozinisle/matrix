import { Component, OnInit } from '@angular/core';
import { MyContactsLandingPageService } from './my-contacts-landing-page.service';

@Component({
  selector: 'app-my-contacts-landing-page',
  templateUrl: './my-contacts-landing-page.component.html',
  styleUrls: ['./my-contacts-landing-page.component.scss']
})
export class MyContactsLandingPageComponent implements OnInit {

  constructor(private myContactsLandingPageService: MyContactsLandingPageService) { }

  ngOnInit() {
    this.myContactsLandingPageService.getContactsList().subscribe(contactList => {
      console.log(contactList);
    });
  }

}
