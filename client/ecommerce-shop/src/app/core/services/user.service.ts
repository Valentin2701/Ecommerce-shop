import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/User';

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

  constructor() { 
    this.user$.subscribe((data) => this.user = data);
  }
}
