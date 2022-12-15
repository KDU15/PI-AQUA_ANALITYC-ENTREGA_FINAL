import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: L.Map;

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  ngOnInit() {


  }
  ionViewDidEnter(){
    this.map = L.map('map').setView([-8.086734, -34.904810], 13);
    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(this.map)

    const markPoint = L.marker([-8.086734, -34.904810]);
    markPoint.bindPopup('<p>Ponto Teste</p>')
    this.map.addLayer(markPoint);
  }

}
