import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  template: `
    <div class="app">
      Parent: {{ myCount1 + myCount2}}
      <counter
        [count]="myCount1"
        (change)="countChange1($event)">
      </counter>
	   <counter
        [count]="myCount2"
        (change)="countChange2($event)">
      </counter>
    </div>
  `
})
export class AppComponent {
  myCount1: number = 10;
  myCount2: number = 10;
  countChange1(event:any) {
    this.myCount1 = event;
  }
  countChange2(event:any) {
    this.myCount2 = event;
  }
}