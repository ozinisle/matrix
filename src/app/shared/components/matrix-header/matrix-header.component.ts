import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../security/services/authentication.service';

@Component({
  selector: 'app-matrix-header',
  templateUrl: './matrix-header.component.html',
  styleUrls: ['./matrix-header.component.scss']
})
export class MatrixHeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  public signOut(): void {
    this.authService.logout();
  }
}
