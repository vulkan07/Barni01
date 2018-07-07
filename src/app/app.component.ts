import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  className = 'donaldiusz';
  bugyi = 'fos';

  activate() {
    console.log('youtube gomb megnyomva');
    alert('Kattints az "OK"-ra a youtube megnyitásához.');
    window.open('https://www.youtube.com/channel/UCc-NRCHc6kt5PeoBGgF_lJg' );
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
