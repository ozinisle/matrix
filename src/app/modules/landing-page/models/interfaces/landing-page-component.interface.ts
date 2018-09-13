import { BaseMenuItemInterface } from './base-menu-item.interface';

export interface LandingPageComponentInterface {
    links: BaseMenuItemInterface[];
    openModule(link: BaseMenuItemInterface): void;
}
