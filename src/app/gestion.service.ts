import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  baudio: number;
baudio$ = new Subject<any>();
  constructor() {

   }
aud() {
this.baudio$.next(this.baudio);
console.log(this.baudio);
}

antiaud() {
  this.baudio$.next(this.baudio + 1 );
  console.log(this.baudio);
  }

audi(): Observable<any> {
this.aud();
  return this.baudio$.asObservable();
}
}
