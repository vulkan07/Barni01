import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  className = 'donaldiusz';
  bugyi = 'Brick';

  activate() {
    console.log('youtube gomb megnyomva');
    const answer = confirm('Kattints az "OK"-ra a youtube megnyitásához.');
    if (answer === true) {
      console.log('alertben az OK gomb megnyomva');
      window.open('https://www.youtube.com/channel/UCc-NRCHc6kt5PeoBGgF_lJg');
    } else {
      console.log('alertben az CANCEL gomb megnyomva');
    }
  }

  color() {
    console.log('pink gomb sikeresen megnyomva');
    this.className = 'donaldiusz2';
  }
  color2() {
    console.log('zöld gomb sikeresen megnyomva');
    this.className = 'donaldiusz';
  }
}
