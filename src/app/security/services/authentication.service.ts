﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatrixConstants } from '../../shared/constants/matrix.constants';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    public isUserAuthenticated: boolean = false;
    public currentUserName: string = '';

    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(MatrixConstants.url.apiUrl + MatrixConstants.url.authenticationUrl,
            { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(MatrixConstants.commonTerms.currentUser, JSON.stringify(user));
                    this.isUserAuthenticated = true;
                    this.currentUserName = user.authenticatedUserName;
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.http.post<any>(MatrixConstants.url.apiUrl + MatrixConstants.url.signOut, {}).subscribe(
            (data) => {
                console.warn('User\'s session has been signed out');
            }
        );
        localStorage.removeItem(MatrixConstants.commonTerms.currentUser);
        this.router.navigate([MatrixConstants.url.login]);
        this.isUserAuthenticated = false;
        this.currentUserName = '';

    }
}
