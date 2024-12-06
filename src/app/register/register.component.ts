import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  registerUser() {
    if (this.userService.isUsernameTaken(this.username)) {
      this.errorMessage = 'Username already exists!';
    } else {
      this.userService.addUser(this.username, this.password);
      this.errorMessage = '';
    }
  }
}
