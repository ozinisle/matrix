import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../security/guards/auth.guard';
import {
    AuthenticatedContentLayoutComponent
} from '../../security/components/authenticated-content-layout/authenticated-content-layout.component';
import { QuoteToMemoryListComponent } from './quote-to-memory-list/quote-to-memory-list.component';
import { QuoteToMemoryEntryComponent } from './quote-to-memory-entry/quote-to-memory-entry.component';

const MEMORY_QUOTES_ROUTES: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: AuthenticatedContentLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'memory-quotes',
                pathMatch: 'full'
            }, {
                path: 'memory-quotes',
                component: QuoteToMemoryListComponent,
                canActivate: [AuthGuard]
            }, {
                path: 'memory-quote-entry',
                canActivate: [AuthGuard],
                component: QuoteToMemoryEntryComponent
            }
        ]
    }
];

export const MemoryQuotesRouter = RouterModule.forChild(MEMORY_QUOTES_ROUTES);
