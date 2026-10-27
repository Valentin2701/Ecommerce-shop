import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$$ = new BehaviorSubject<string | null>(null);
  error$: Observable<string | null> = this.error$$.asObservable();

  constructor() {}

  setError(message: string): void {
    this.error$$.next(message);
    setTimeout(() => this.clearError(), 4000);
  }

  clearError(): void {
    this.error$$.next(null);
  }
}
