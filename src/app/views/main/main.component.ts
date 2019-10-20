import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('map', {static: false}) map;

  constructor() { }

  ngOnInit() {
  }

  formSubmitted(data: any) {
    console.log(data);
    this.map.updateHeatMap(data);
  }

}
