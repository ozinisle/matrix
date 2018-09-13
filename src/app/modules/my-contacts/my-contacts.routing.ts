import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../security/guards/auth.guard';
import { MyContactsLandingPageComponent } from './my-contacts-landing-page/my-contacts-landing-page.component';
import {
    AuthenticatedContentLayoutComponent
} from '../../security/components/authenticated-content-layout/authenticated-content-layout.component';

const MY_CONTACTS_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: AuthenticatedContentLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'contacts',
                pathMatch: 'full'
            }, {
                path: 'contacts',
                component: MyContactsLandingPageComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

export const MyContactsRouter = RouterModule.forChild(MY_CONTACTS_ROUTES);
