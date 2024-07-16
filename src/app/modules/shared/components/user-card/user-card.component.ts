import { Component, Input } from '@angular/core';
import { User } from '../../../core/models/User';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() users!: User[];


  getUsernameByManagerId(managerId: number): string {
    const user = this.users.find(u => u.id === managerId);
    return user ? user.username : 'Super Admin';
  }
}
