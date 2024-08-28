import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserRole } from '../enums/userRole.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<void> {
    return new Observable(observer => {
      this.users.push({ ...user, id: this.users.length + 1 });
      observer.next();
      observer.complete();
    });
  }
}
