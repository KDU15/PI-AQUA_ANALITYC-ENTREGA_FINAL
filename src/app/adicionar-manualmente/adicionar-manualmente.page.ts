import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-manualmente',
  templateUrl: './adicionar-manualmente.page.html',
  styleUrls: ['./adicionar-manualmente.page.scss'],
})
export class AdicionarManualmentePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a])
  }

  ngOnInit() {
  }

}
