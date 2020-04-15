import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  get() {
    // this.loadUser()
    this.getCars()
  }

  clickMessage: string;

  constructor(private userService: UserService) {
  }

  user: User;

  getCars() {
    this.userService.getCars().subscribe((user: User) => {
      this.user = user;
      this.clickMessage = user.data;
    });
   }
}
