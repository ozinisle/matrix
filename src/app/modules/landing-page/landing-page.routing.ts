import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from '../../security/guards/auth.guard';

const LANDING_PAGE_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        canActivate: [AuthGuard],
        component: LandingPageComponent
    }
];



export const LandingPageRouter = RouterModule.forChild(LANDING_PAGE_ROUTES);
