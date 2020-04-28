import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-app';

  sex: string[] = ['Masculino', 'Feminino'];

  foods: FoodModel[] = [
    {value: 'carne-0', viewValue: 'Carne'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  saveUser() {
    
  }
}
