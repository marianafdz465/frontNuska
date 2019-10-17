import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artesano-tarjeta',
  templateUrl: './artesano-tarjeta.component.html',
  styleUrls: ['./artesano-tarjeta.component.css']
})
export class ArtesanoTarjetaComponent implements OnInit {

  @Input() artesano: any = {};
  @Input() index: number;

  @Output() artesanoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.artesanoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verArtesano() {
    // console.log(  this.index );
    this.router.navigate( ['/artesano', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
