import { Injectable } from '@angular/core';
import { TaskStatus } from '../enums/TaskStatus.enum';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      status: TaskStatus.ToDo,
      assignedTo: 3
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      status: TaskStatus.InProgress,
      assignedTo: 3
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      status: TaskStatus.ToDo,
      assignedTo: 2
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description for Task 4',
      status: TaskStatus.Done,
      assignedTo: 3
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Description for Task 5',
      status: TaskStatus.ToDo,
      assignedTo: 2
    }
  ];


  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksForUser(userId: number): Task[] {
    return this.tasks.filter(task => task.assignedTo === userId);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
