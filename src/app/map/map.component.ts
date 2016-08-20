import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import Map = require('esri/map');

// import { MapService } from './map.service';

@Component({
  selector: 'esri-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent {
  map:Map
  ngOnInit(){
    this.map = new Map("mapDiv", {
      basemap: "topo",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
      center: [-122.45, 37.75], // longitude, latitude
      zoom: 13
    });
  }
  //
  // @Output() mapLoaded = new EventEmitter();
  //
  // map: any;
  // options: Object;
  // itemId: string;
  //
  // constructor(private elRef:ElementRef, private _mapService:MapService) {}
  //
  // ngOnInit() {
  //   // create the map
  //   this._mapService.createMap(this.itemId, this.elRef.nativeElement.firstChild, this.options).then((response) => {
  //     // get a reference to teh map and expose response to app
  //     this.map = response.map;
  //     this.mapLoaded.next(response);
  //   });
  // }
  //
  // setBasemap(basemapName) {
  //   this._mapService.clearBasemap(this.map);
  //   this.map.setBasemap(basemapName);
  // }
  //
  // // destroy map
  // ngOnDestroy() {
  //   if (this.map) {
  //     this.map.destroy();
  //   }
  // }
}
