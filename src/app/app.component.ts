import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  a: number;
  b: number;
  result: number;

  add() {
    this.result = this.a + this.b;
  }

  subtract() {
    this.result = this.a - this.b;
  }

  multiply() {
    this.result = this.a * this.b;
  }

  divide() {
    this.result = this.a / this.b;
  }
}
