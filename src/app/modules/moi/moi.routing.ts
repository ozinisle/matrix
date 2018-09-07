import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../security/guards/auth.guard';
import { MoiLandingPageComponent } from './moi-landing-page/moi-landing-page.component';
import { MoiEntryComponent } from './moi-entry/moi-entry.component';
import {
    AuthenticatedContentLayoutComponent
} from '../../security/components/authenticated-content-layout/authenticated-content-layout.component';

const MOI_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: AuthenticatedContentLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'moi',
                pathMatch: 'full'
            },
            {
                path: 'moi',
                canActivate: [AuthGuard],
                component: MoiLandingPageComponent
            }, {
                path: 'moi-entry',
                canActivate: [AuthGuard],
                component: MoiEntryComponent
            }
        ]
    }
];

export const MoiRouter = RouterModule.forChild(MOI_ROUTES);
