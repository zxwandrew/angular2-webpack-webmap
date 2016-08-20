import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map.component';

@Component({
  directives: [MapComponent],
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})
export class AppComponent {

  // references to child components
  @ViewChild(MapComponent) mapComponent:MapComponent;

  title = 'Map Title';

  // map config
  itemId = '9fbc6b9438e74d869b8ab9d3d4395ace';
  public mapOptions = {
    basemap: 'gray',
    center: [-97, 38], // lon, lat
    zoom: 5
  };

  onMapLoad(response) {
    const map = response.map;
  }

}
