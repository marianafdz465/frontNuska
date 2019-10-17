import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtesaniasService } from '../../servicios/artesanias.service';
@Component({
  selector: 'app-artesania',
  templateUrl: './artesania.component.html',
})
export class ArtesaniaComponent {
  artesania: any = {};
  constructor( private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line:align
    // tslint:disable-next-line:variable-name
               private _artesaniasService: ArtesaniasService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.artesania = this._artesaniasService.getArtesania(params.id);
   });

  }

}
