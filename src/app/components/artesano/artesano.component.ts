import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtesanosService } from '../../servicios/artesanos.service';

@Component({
  selector: 'app-artesano',
  templateUrl: './artesano.component.html'
})
export class ArtesanoComponent {

  artesano: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _artesanosService: ArtesanosService
    ) {

    this.activatedRoute.params.subscribe( params => {
        this.artesano = this._artesanosService.getArtesano( params.id );
        // console.log(this.heroe);
    });

  }

}
