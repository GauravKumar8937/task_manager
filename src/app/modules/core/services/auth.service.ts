import { inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserRole } from '../enums/userRole.enum';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _usersService= inject(UserService)
  _router = inject(Router)

  users: User[] =[]

  currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(){
    this._usersService.getUsers().subscribe(users =>{
      this.users = users;
    })
  }



  login(username: string, password: string): boolean {
    // const users: User[] = [
    //   { id: 1, username: 'yassin', password: '123456', role: UserRole.Admin },
    //   { id: 2, username: 'mohamed', password: '123456', role: UserRole.Manager, managerId: 1 },
    //   { id: 3, username: 'ali', password: '123456', role: UserRole.User, managerId: 2 },
    // ];

    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._router.navigate(['/']);
      return true;
    } else {
      console.log('invalid username or password')
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser')
    this._router.navigate(['/login']);
  }

}

