import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../types/User';
import { APIResponse } from '../types/APIResponse';
import { HttpClient } from '@angular/common/http';
import { errorGuard } from '../guards/error-guard.pipe';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$$ = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.user$$.asObservable();
  user: User | null = null;

  get isLoggedIn(): boolean{
    return !!this.user
  }

  constructor(private errorService: ErrorService, private http: HttpClient) { 
    this.user$.subscribe((data) => this.user = data);
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
    }));
  }

  ngOnDestroy(): void {
    this.user$$.unsubscribe();
  }
}
