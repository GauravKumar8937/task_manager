import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { TaskCardComponent } from '../../../shared/components/task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../core/services/task.service';
import { User } from '../../../core/models/User';
import { Observable } from 'rxjs';
import { Task } from '../../../core/models/Task';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserCardComponent } from '../../../shared/components/user-card/user-card.component';
import { UserService } from '../../../core/services/user.service';
import { AppState } from '../../../../store/App/app.reducer';
import { Store } from '@ngrx/store';
import { getAddTaskForm, getAddUserForm } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, TaskCardComponent, CommonModule, UserFormComponent, UserCardComponent , AddTaskFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  activeTab: number = 1;
  currentUserRole: string = '';
  currentUser!: User
  tasks$!: Observable<Task[]>
  users$!: Observable<User[]>
  showAddUserForm$!: Observable<boolean>
  showAddTaskForm$!: Observable<boolean>


  _taskService = inject(TaskService)
  _userService = inject(UserService)
  _store = inject(Store<AppState>)


  ngOnInit(): void {
    this.getCurrentUser()
    this.loadTasks()
    this.loadUsers()

    this.showAddUserForm$ =this._store.select(getAddUserForm)
    this.showAddTaskForm$ =this._store.select(getAddTaskForm)
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user ?? '')
      this.currentUserRole = this.currentUser.role
    }
  }


  loadTasks(): void {
    if (this.currentUserRole === 'Admin' || this.currentUserRole === 'Manager') {
      this.tasks$ = this._taskService.getTasks();
    } else if (this.currentUserRole === 'User') {
      this.tasks$ = this._taskService.getTasksForUser(this.currentUser.id)
    }
  }

  loadUsers() {
    this.users$ = this._userService.getUsers()
  }

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
    this.activeTab == 1
  }

  deleteTask(taskId: number): void {
    this._taskService.deleteTask(taskId).subscribe({
      next: (tasks) => {
        this.tasks$ = this._taskService.getTasks();
      },
      error: (error) => {
        console.error('Error deleting task:', error);
      }
    });
  }

  showAddUserForm(){
    this._store.dispatch(appActions.toggleAddUserForm())
  }

  showAddTaskForm(){
    this._store.dispatch(appActions.toggleAddTaskForm())
  }

}
