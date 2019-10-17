import { Component, OnInit } from '@angular/core';
import { ArtesanosService, Artesano } from '../../servicios/artesanos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artesanos',
  templateUrl: './artesanos.component.html'
})
export class ArtesanosComponent implements OnInit {

  artesanos: Artesano[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _artesanosService: ArtesanosService,
               private router: Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.artesanos = this._artesanosService.getArtesanos();
    // console.log( this.heroes );
  }

  verArtesano( idx: number ) {
    this.router.navigate( ['/artesano', idx] );
  }

}
