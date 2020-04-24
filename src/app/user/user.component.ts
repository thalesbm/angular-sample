
import { Component } from '@angular/core';
import { UserService } from './service/UserService';
import { User } from './models/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'User';

  get() {
    this.loadUser()
  }

  responseMessage: string;

  constructor(private userService: UserService) {
  }

  loadUser() {
    this.userService.getUser().subscribe((user: User) => {
      this.responseMessage = user.data;
    });
   }

}