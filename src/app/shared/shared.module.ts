import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './directives/alert/alert.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AlertService } from './directives/alert/alert.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PageNotFoundComponent,
    AlertComponent
  ],
  exports: [
    AlertComponent,
    PageNotFoundComponent
  ],
  providers: [
    ErrorInterceptor,
    AlertService,

    // fakeBackendProvider,
  ],
})
export class SharedModule { }
