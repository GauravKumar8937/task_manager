import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../../core/models/Task';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '../../../core/enums/TaskStatus.enum';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();

  _tasksService =inject(TaskService)
  editTask() {

  }

  onDeleteClick(): void {
    this.deleteTask.emit(this.task.id);
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
