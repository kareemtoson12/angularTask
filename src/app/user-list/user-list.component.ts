import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: { username: string, password: string }[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
    this.users = this.userService.getUsers(); // Update the list
  }
}
