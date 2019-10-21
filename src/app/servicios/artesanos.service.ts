
import { Injectable } from '@angular/core';

@Injectable()
export class ArtesanosService {

  private artesanos: Artesano[] = [
    {
      nombre: 'Anahí Ramírez',
      // tslint:disable-next-line:max-line-length
      bio: 'Proveniente de las orillas del lago de Pátzcuaro, Anahí tiene 20 años dedicandose a trabaja la chuspata. Dedica aproximadamente 15 hrs de jornada diarias para elaborar los productos que comercia en Pátzcuaro, trabajar la chuspata fue la herencia que su padre le dejo y ahora ella se dedica a comerciar sus productos en diferentes partes de Pátzcuaro.',
      img: 'assets/img/artesanos/anahiRamirez.jpg',
      aparicion: '2019-06-12',
      casa: 'Pátzcuaro Michoacan'
    },
    {
      nombre: 'Jose Nando',
      // tslint:disable-next-line:max-line-length
      bio: 'Originario de San Luis Potosí, aprendió en un pequeño taller de su tío a trabajar el ixtle y la cinta. Gracias a ese legado ha podido otorgarle sustento a su familia. José Nando invierte largas jornadas para realizar sus productos, los cuales promueve en el centro histórico de San Luis Potosí.',
      img: 'assets/img/artesanos/joseNando.jpg',
      aparicion: '2019-06-12',
      casa: 'San Luis Potosi'
    },
    {
      nombre: 'Armando Gómez',
      // tslint:disable-next-line:max-line-length
      bio: 'Armando Gómez ha dedicado toda su vida a elaborar muebles para la región de Rio Verde. Su sueño es que la artesanía mexicana se otorgue el valor que se merece, pues en cada mueble se va una parte del alma del artesano mexicano',
      img: 'assets/img/artesanos/armandoGomez.jpg',
      aparicion: '2019-06-12',
      casa: 'Río Verde, San Luis Potosi'
    },
    {
      nombre: 'Ángel Sanchez Martínez',
      // tslint:disable-next-line:max-line-length
      bio: 'Nació en la ciudad de Aguascalientes, desde los 22 años dedica su vida a la alfarería. Tiene un pequeño taller en el centro de la ciudad e imparte cursos. Su sueño es trascender y compartir el arte de la alfarería para las nuevas generaciones',
      img: 'assets/img/artesanos/angelSanchez.jpg',
      aparicion: '2019-06-12',
      casa: 'Aguascalientes, Aguascalientes'
    },
    {
      nombre: 'Maira Guadalupe Martínez',
      // tslint:disable-next-line:max-line-length
      bio: 'Especialista en el arte textil y originaria de Aguascalientes, desde temprana edad se involucro en este oficio, creo sus marca de ropa y actualmente se dedica a comercializarla en el interior del estado ',
      img: 'assets/img/artesanos/mairaMartinez.jpg',
      aparicion: '2019-06-12',
      casa: 'Aguascalientes, Aguascalientes'
    },
    {
      nombre: 'Rogelio Benítez Torres',
      // tslint:disable-next-line:max-line-length
      bio: 'Nació en Tepic Nayarit y a temprana edad se imvolucro en el arte que sus abuelos le heredaron. Actualmente viaja por la replublica mexicana para promover sus productos',
      img: 'assets/img/artesanos/rogelioBenitez.jpg',
      aparicion: '2019-06-12',
      casa: 'Tepic, Nayarit'
    },
    {
      nombre: 'Martina García Cruz',
      // tslint:disable-next-line:max-line-length
      bio: 'Originaria de Oaxaca, su familia se mudo cuando ella era muy joven al municipio de Dolores Hidalgo. En este lugar aprendió a trabajar con los materiales de la región y con ayuda de sus hermanos fundaron un pequeño taller donde trabajan la talavera y otros productos. Su sueño es poder seguir dedicandose a elaborar artesanía y sin necesidad de bajar el precio de sus productos',
      img: 'assets/img/artesanos/martinaGarcia.jpg',
      aparicion: '2019-06-12',
      casa: 'Marddvel'
    }
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }


  getArtesanos(): Artesano[] {
    return this.artesanos;
  }

  getArtesano( idx: string ) {
    return this.artesanos[idx];
  }

  buscarArtesanos( termino: string ): Artesano[] {

    const artesanosArr: Artesano[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.artesanos.length; i ++ ) {

      const artesano = this.artesanos[i];

      const nombre = artesano.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0  ) {
        artesano.idx = i;
        artesanosArr.push( artesano );
      }

    }

    return artesanosArr;

  }


}


export interface Artesano {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
