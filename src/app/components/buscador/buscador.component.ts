import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtesanosService } from '../../servicios/artesanos.service';
import { ArtesaniasService } from '../../servicios/artesanias.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  artesanos: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _artesanosService: ArtesanosService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.artesanos = this._artesanosService.buscarArtesanos( params.termino );
      console.log( this.artesanos );
    });

  }

}
