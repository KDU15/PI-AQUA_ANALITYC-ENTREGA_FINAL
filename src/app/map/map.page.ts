import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  ngOnInit() {
  }

}
