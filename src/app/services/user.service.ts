import { USERS_DATA } from './../data/user.data';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  auth = false;
  users: User[];
  currentUser!: User;

  constructor() {
    this.users = USERS_DATA;
  }

  login(ID: string, pass: string) {
    const user = this.users.find((u) => u.ID === ID && u.pass === pass);
    this.auth = user ? true : false;

    if (user) {
      this.currentUser = user;
    }

    return this.auth;
  }

  logout() {
    this.auth = false;
    this.currentUser = undefined as any;
  }
}
