import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService) {}

  registerUser(): void {
    this.errorMessage = this.userService.isUsernameTaken(this.username)
      ? 'Username already exists!'
      : '';
    
    if (!this.errorMessage) {
      this.userService.addUser(this.username, this.password);
    }
  }
}
