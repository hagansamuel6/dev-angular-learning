import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = "home page component";
  isHidden: boolean = true;
  
  getTitle() {
    return this.title;
  }
}
