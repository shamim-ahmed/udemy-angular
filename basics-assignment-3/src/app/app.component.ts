import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  timestamps = [];
  count = 0;

  onButtonClick() {
    this.timestamps.push(new Date());
    this.showParagraph = !this.showParagraph;
  }
}
