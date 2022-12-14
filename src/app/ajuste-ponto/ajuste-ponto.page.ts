import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuste-ponto',
  templateUrl: './ajuste-ponto.page.html',
  styleUrls: ['./ajuste-ponto.page.scss'],
})
export class AjustePontoPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  goToPage(a: string):void{
    this.route.navigate([a]);
  }

  ngOnInit() {
  }

}
