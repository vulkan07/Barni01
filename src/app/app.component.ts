import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bugyi = 'fos';
  activate() {
    console.log('sikeresen megnyomva');
    alert('Kattints az "OK"-ra a youtube megnyitásához.');
    window.open('https://www.youtube.com' );

  }
}
