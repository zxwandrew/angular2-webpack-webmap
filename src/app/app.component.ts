import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map';

@Component({
  directives: [MapComponent],
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent {
  @ViewChild(MapComponent) mapComponent:MapComponent;

  title = 'Map Title';
}
