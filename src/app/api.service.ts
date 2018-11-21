import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public logged_name = new BehaviorSubject<any>('Angular');
         login_name  = this.logged_name.asObservable();

  constructor() {  }

  navId(login_name) {
    this.logged_name.next(login_name);
  }
}
