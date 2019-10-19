import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = 'My first AGM project';
  lat = 7.0722;
  lng = 125.6132;

  constructor() { }

  ngOnInit() {
  }

}
