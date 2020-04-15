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

  responseMessage: string;

  constructor(private userService: UserService) {
  }
  getCars() {
    this.userService.getUser().subscribe((user: User) => {
      this.responseMessage = user.data;
    });
   }
}
