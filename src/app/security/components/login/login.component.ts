import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../../shared/directives/alert/alert.service';
import { MatrixConstants } from '../../../shared/constants/matrix.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams[MatrixConstants.values.returnUrlParamKey] || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.isValidationSuccess()) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginForm.username.value, this.loginForm.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

export class LoginForm {
  public username: MatrixLoginFormInputField = new MatrixLoginFormInputField();
  public password: MatrixLoginFormInputField = new MatrixLoginFormInputField();

  public isValidationSuccess(): boolean {
    return this.username.errors.required || this.password.errors.required;
  }

  public validate() {
    this.username.errors.required = (this.username.value && this.username.value.length > 6) ? false : true;
    this.password.errors.required = (this.password.value && this.password.value.length >= 8) ? false : true;
  }
}

export class MatrixLoginFormInputField {
  public value: string;
  public errors: MatrixLoginFormInputFieldErrors = new MatrixLoginFormInputFieldErrors();
}

export class MatrixLoginFormInputFieldErrors {
  public required: boolean = false;
}
