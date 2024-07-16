import { Component, Input } from '@angular/core';
import { Task } from '../../../core/models/Task';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '../../../core/enums/TaskStatus.enum';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  @Input() task!: Task;

  editTask() {

  }

  removeTask() {

  }

  getStatusClass(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.ToDo:
        return 'toDo';
      case TaskStatus.InProgress:
        return 'inProgress';
      case TaskStatus.Done:
        return 'done';
      case TaskStatus.NeedDetails:
        return 'needDetails';
      default:
        return '';
    }

  }
}
