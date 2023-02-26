import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
  private router: Router,
  private authenticationService: AuthenticationService
) { }

ngOnInit() { }

public isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
}

private onLogout(): void {
  return this.authenticationService.logout();
}
}