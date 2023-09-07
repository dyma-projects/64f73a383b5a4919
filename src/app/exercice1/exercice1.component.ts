import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public inputValue: string = 'toto';
  public hrefGoogle: string = 'https://www.google.com';

  public method(event: Event): void {
    this.inputValue = 'test';
  }
}
