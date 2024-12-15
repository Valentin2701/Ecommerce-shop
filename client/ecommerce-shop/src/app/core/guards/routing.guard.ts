import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(): boolean {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
