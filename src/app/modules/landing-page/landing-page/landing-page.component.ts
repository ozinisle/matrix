import { Component, OnInit } from '@angular/core';
import { BaseMenuItemModal } from '../models/base-menu-item.model';
import { BaseMenuItemInterface } from '../models/interfaces/base-menu-item.interface';
import { Router } from '@angular/router';
import { LandingPageComponentInterface } from '../models/interfaces/landing-page-component.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, LandingPageComponentInterface {

  public links: BaseMenuItemInterface[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.links.push((new BaseMenuItemModal()).setLabel('Contacts').setNavigationRouteUrl('contacts'));
    this.links.push((new BaseMenuItemModal()).setLabel('Moi').setNavigationRouteUrl('moi'));
    this.links.push((new BaseMenuItemModal()).setLabel('Quote to Memory').setNavigationRouteUrl('memory-quotes'));
  }

  public openModule(link: BaseMenuItemInterface): void {
    this.router.navigate([link.navigationRouteUrl]);
  }

}
