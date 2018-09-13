import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatrixConstants } from '../../../shared/constants/matrix.constants';
import { MatrixHttpService } from '../../../security/services/matrix-http.service';

@Injectable({
  providedIn: 'root'
})
export class MyContactsLandingPageService {

  constructor(private http: MatrixHttpService) { }

  getContactsList(): Observable<any> {
    return this.http.doPost(MatrixConstants.url.apiUrl + MatrixConstants.url.getContactListUrl, {});
  }

}
