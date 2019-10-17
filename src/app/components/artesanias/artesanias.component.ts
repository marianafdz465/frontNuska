import { Component, OnInit } from '@angular/core';
import { ArtesaniasService, Artesania } from '../../servicios/artesanias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artesanias',
  templateUrl: './artesanias.component.html',
})
export class ArtesaniasComponent implements OnInit {
  artesanias: Artesania[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _artesaniasService: ArtesaniasService,
               private router: Router) {
    // console.log('HOLA MUNDO');
  }

  ngOnInit() {
    // console.log(this.artesanias);
    this.artesanias = this._artesaniasService.getArtesanias();
  }

  verArtesania( idx: number ) {
    console.log(idx);
    this.router.navigate( ['/artesania', idx]);
  }

}
