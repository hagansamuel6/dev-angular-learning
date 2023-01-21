import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  // template: "<p>notification still works</p>",
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
   title = "Please accept these cookies to improve your experience on our site"
}
