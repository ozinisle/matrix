import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const LANDING_PAGE_ROUTES: Routes = [
    {
        path: '',
        component: LandingPageComponent
    }
];



export const LandingPageRouter = RouterModule.forChild(LANDING_PAGE_ROUTES);
