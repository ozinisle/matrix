import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './modules/landing-page/landing-page/landing-page.component';
import { AuthGuard } from './security/guards/auth.guard';
import { LoginComponent } from './security/components/login/login.component';
import { RegisterComponent } from './security/components/register/register.component';
import {
    AuthenticatedContentLayoutComponent
} from './security/components/authenticated-content-layout/authenticated-content-layout.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthenticatedContentLayoutComponent,
        children: [{
            path: '',
            component: LoginComponent
        }]
    },
    {
        path: 'register',
        component: AuthenticatedContentLayoutComponent,
        children: [{
            path: '',
            component: RegisterComponent
        }]
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: 'app/modules/landing-page/landing-page.module#LandingPageModule',
    },
    {
        path: 'contacts',
        canActivate: [AuthGuard],
        loadChildren: 'app/modules/my-contacts/my-contacts.module#MyContactsModule',
    },
    {
        path: 'moi',
        canActivate: [AuthGuard],
        loadChildren: 'app/modules/moi/moi.module#MoiModule',
    },
    {
        path: 'memory-quotes',
        canActivate: [AuthGuard],
        loadChildren: 'app/modules/memory-quotes/memory-quotes.module#MemoryQuotesModule',
    },
    {
        path: '404',
        component: AuthenticatedContentLayoutComponent,
        children: [{
            path: '',
            component: PageNotFoundComponent
        }]
    },
    {
        path: '**',
        component: AuthenticatedContentLayoutComponent,
        children: [{
            path: '',
            component: PageNotFoundComponent
        }]
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
