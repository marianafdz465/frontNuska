import { Injectable } from '@angular/core';


@Injectable()
export class ArtesaniasService {

    private artesanias: Artesania[] = [
        {
            nombreArtesania: 'Objetos de Cobre',
            nombreArtesano: 'Artesano: Marco Fabricio Alcantar',
            descripcion: 'Diversidad de joyeria, articulos de decoración y utensilios para el hogar' ,
            img2: 'assets/img/artesanias/cazuelasCobre.jpg',
            lugarOrigen: 'Lugar de venta: Santa Clara del Cobre, Michoacan',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Alebrijes Oaxaqueños',
            nombreArtesano: 'Lizeth López Ojeda',
            descripcion: 'Piezas elaboradas a base de madera, creaciones de personajes únicos donde cada artesano le da un toque especial basado en su imaginación',
            img2: 'assets/img/artesanias/alebrijes.jpg',
            lugarOrigen: 'Lugar de venta: San Martin Tilcajete Oaxaca',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Cojín Tenango',
            nombreArtesano: 'Artesano: Isabel López ',
            descripcion: 'Funda de cojín 45 x 45 cm bordado a mano, cierre con cremallera fina y discreta en la parte lateral del cojin, tela de algodón con coloridos y diseños únicos. ',
            img2: 'assets/img/artesanias/cojin.jpg',
            lugarOrigen: 'Lugar de venta: Tenango de Doria, Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Piezas de shakira',
            nombreArtesano: 'Artesano: Rogelio Benítez',
            descripcion: 'Piezas de colección, elaboradas con fina cera de Campeche y delicadamente colocada cada shakira para dar forma a objetos propios de la región',
            img2: 'assets/img/artesanias/huichol.jpg',
            lugarOrigen: 'Lugar de venta: Durango',
            fecha: '2019-02-03'
        },

        {
            nombreArtesania: 'Metates y molcajetes',
            nombreArtesano: 'Artesano: Irene R. Aguilar Alcántara',
            descripcion: 'Piedra volcanica, labrada dando forma exquisita a diferentes artículos decorativos y de uso domestico',
            img2: 'assets/img/artesanias/petates.jpg',
            lugarOrigen: 'Lugar de venta: Ocotlán de Morelos, Oaxaca',
            fecha: '2019-02-03'
        },


        {
            nombreArtesania: 'Rebozos',
            nombreArtesano: 'Artesano: Oneida Ochoa',
            descripcion: 'Rebozo fino de Santa Maria, realizados en telares y cuidadosamente trabajados con hilo de seda.',
            img2: 'assets/img/artesanias/rebozo.jpg',
            lugarOrigen: 'Lugar de venta: Santa María, San Luís Potosi',
            fecha: '2019-02-03'
        },

        {
            nombreArtesania: 'Caminos de mesa',
            nombreArtesano: 'Artesano: Juan Martin',
            descripcion: 'Bordado chiapaneco, bordado en maquina con colores vistosos ',
            img2: 'assets/img/artesanias/tapetes.jpg',
            lugarOrigen: 'Lugar de venta: Chiapas',
            fecha: '2019-02-03'
        },


        {
            nombreArtesania: 'Figuras de chuspata',
            nombreArtesano: 'Artesano: Anahí Ramírez',
            descripcion: 'Proveniente de las orillas del lago de Patzcuaro, la chuspata es un tipo de lirio acuático que es utilizado por artesanos de la región para la elaboración de múltiples objetos de uso cotidiano. ',
            img2: 'assets/img/artesanias/yute.jpg',
            lugarOrigen: 'Lugar de venta: Pátzcuaro Michoacan',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Zapato artesanal',
            nombreArtesano: 'Artesano: Roberto Najar',
            descripcion: 'Zapatos de cuero y vaqueta de diferentes modelos',
            img2: 'assets/img/artesanias/zapatos.jpg',
            lugarOrigen: 'Lugar de venta: León, Guanajuato',
            fecha: '2019-02-03'
        },
    ];
    constructor() {
        console.log('LISTO ARTESANIAS');
     }

    getArtesanias(): Artesania[] {
        return this.artesanias;
    }


      getArtesania(idx: string) {
        return this.artesanias[idx];
      }


}

export interface Artesania {
    nombreArtesania: string;
    nombreArtesano: string;
    descripcion: string;
    img2: string;
    lugarOrigen: string;
    fecha: string;
}
