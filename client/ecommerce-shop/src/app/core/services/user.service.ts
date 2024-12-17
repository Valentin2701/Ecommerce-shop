import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../types/User';
import { APIResponse } from '../types/APIResponse';
import { HttpClient } from '@angular/common/http';
import { errorGuard } from '../guards/error-guard.pipe';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$$ = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.user$$.asObservable();

  constructor(private errorService: ErrorService, private http: HttpClient, private router: Router) { }

  initializeUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get('/api/user').subscribe({
        next: (user: any) => {
          this.user$$.next(user);
          resolve();
        },
        error: () => {
          this.user$$.next(null);
          resolve();
        },
      });
    });
  }

  getUser(){
    return this.user$$.value
  }

  register(userData: any) {
    return this.http.post<APIResponse>("/api/register", userData).pipe(errorGuard(), tap(response => {
      this.user$$.next(response.user);
    }), catchError((message) => {
      this.errorService.error$$.next(message);
      return throwError(() => message);
    }));
  }

  login(userData: any) {
    return this.http.post<APIResponse>("/api/login", userData).pipe(errorGuard(), tap(response => {
      this.user$$.next(response.user);
    }), catchError((message) => {
      this.errorService.error$$.next(message);
      return throwError(() => message);
    }))
  }

  logout() {
    return this.http.post<void>("/api/logout", {}).pipe(tap(() => {
      this.user$$.next(null);
      this.router.navigate(["/"]);
    }));
  }
}
