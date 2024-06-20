import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor } from '@angular/common';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent], // , NgFor, NgIf
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID?: string;

  // user_tasks = DUMMY_USERS.find(user.id === selectedUSerId);
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}
