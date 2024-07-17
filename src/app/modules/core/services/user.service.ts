import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserRole } from '../enums/userRole.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      username: 'yassin',
      password: '123456',
      role: UserRole.Admin
    },
    {
      id: 2,
      username: 'mohamed',
      password: '123456',
      role: UserRole.Manager,
      managerId: 1
    },
    {
      id: 3,
      username: 'khaled',
      password: '123456',
      role: UserRole.Manager,
      managerId: 2
    },
    {
      id: 4,
      username: 'kariem',
      password: '123456',
      role: UserRole.User,
      managerId: 1
    },
    {
      id: 5,
      username: 'ali',
      password: '123456',
      role: UserRole.User,
      managerId: 2
    }
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
