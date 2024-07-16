import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRole } from '../../../core/enums/userRole.enum';
import { User } from '../../../core/models/User';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  managers: User[] = [];
  userRoles = Object.values(UserRole);


  _fb = inject(FormBuilder)
  _userService = inject(UserService)


  ngOnInit(): void {
    this.userForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [UserRole.User, Validators.required],
      managerId: [{ value: '', disabled: true }]
    });

    this.userForm.get('role')?.valueChanges.subscribe(role => {
      if (role === UserRole.User) {
        this.userForm.get('managerId')?.enable();
      } else {
        this.userForm.get('managerId')?.disable();
      }
    });

    this._userService.getUsers().subscribe(users => {
      this.managers = users.filter(user => user.role === UserRole.Manager);
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this._userService.addUser(newUser).subscribe(() => {
        this.userForm.reset({
          username: '',
          password: '',
          role: UserRole.User,
          managerId: { value: '', disabled: true }
        });
      });
    }
  }
}
