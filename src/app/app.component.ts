import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature; //ta n8ayer men recipe la shopping list
  }
}
