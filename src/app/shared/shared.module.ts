import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './directives/alert/alert.component';
import { fakeBackendProvider } from './helpers/fake-backend';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PageNotFoundComponent,
    AlertComponent
  ],
  providers: [
    ErrorInterceptor,
    fakeBackendProvider
  ]
})
export class SharedModule { }
