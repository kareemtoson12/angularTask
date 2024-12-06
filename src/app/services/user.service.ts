import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  isUsernameTaken(username: string): boolean {
    return this.users.some((user) => user.username === username);
  }

  addUser(username: string, password: string) {
    this.users.push({ username, password });
  }

  getUsers() {
    return this.users;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
