import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p class="success-message">You are successfully registered!</p>`,
  styles: [`
    .success-message {
        font: {
          size:2rem;
          weight:700 ;
        }
        color:green;
        background-color: rgb(151, 240, 175);
        border:1px solid green;
        border-radius: 1rem;
        padding: 0.5rem;
    }

  `]
})
export class SuccessAlertComponent {

}
