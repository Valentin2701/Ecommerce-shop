import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$$ = new BehaviorSubject<string | null>(null);
  error$: Observable<string | null> = this.error$$.asObservable();
  error: string | null = null;

  constructor() {
    this.error$.subscribe(err => {
      this.error = err;
      setTimeout(() => this.error = null, 3000);
    })
  }
}
