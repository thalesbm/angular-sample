import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  share() {
    window.alert('The product has been shared!');
    this.loadUser()
  }

  constructor(private userService: UserService) {}
  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
    window.alert(this.profile);
  }
}
