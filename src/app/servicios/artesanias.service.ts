import { Injectable } from '@angular/core';


@Injectable()
export class ArtesaniasService {

    private artesanias: Artesania[] = [
        {
            nombreArtesania: 'Objetos de Cobre',
            nombreArtesano: 'Artesano: Marco Fabricio Alcantar',
            descripcion: 'Diversidad de platos, cazuelas y utensilios de cobre',
            img2: 'assets/img/artesanias/cazuelasCobre.jpg',
            lugarOrigen: 'Lugar de venta: Santa Clara del Cobre, Michoacan',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Alebrijes Oaxaqueños',
            nombreArtesano: 'Lizeth López Ojeda',
            descripcion: '',
            img2: 'assets/img/artesanias/alebrijes.jpg',
            lugarOrigen: 'San Martin Tilcajete Oaxaca',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Cojín Tenagdo',
            nombreArtesano: 'Juan',
            descripcion: 'Funda de cojín 45 x 45 cm bordado a mano, cierre con cremallera fina y discrete en la parte lateral del cojin. 100% artesanal',
            img2: 'assets/img/artesanias/cojin.jpg',
            lugarOrigen: 'Tenango de Doria, Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Piezas de shakira',
            nombreArtesano: 'Juan',
            descripcion: 'Pieza de coleccion',
            img2: 'assets/img/artesanias/huichol.jpg',
            lugarOrigen: 'Tepic, Nayarit',
            fecha: '2019-02-03'
        },

        {
            nombreArtesania: 'Metates y molcajetes',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/artesanias/petates.jpg',
            lugarOrigen: 'San Luís Potosí',
            fecha: '2019-02-03'
        },


        {
            nombreArtesania: 'Rebozos',
            nombreArtesano: 'Juan',
            descripcion: 'Rebozo fino de Santa Maria',
            img2: 'assets/img/artesanias/rebozo.jpg',
            lugarOrigen: 'Santa María, San Luís Potosi',
            fecha: '2019-02-03'
        },

        {
            nombreArtesania: 'Caminos de mesa',
            nombreArtesano: 'Juan',
            descripcion: 'Bordado chiapaneco, caminos de mesa',
            img2: 'assets/img/artesanias/tapetes.jpg',
            lugarOrigen: 'Chiapas',
            fecha: '2019-02-03'
        },


        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/artesanias/yute.jpg',
            lugarOrigen: 'Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Zapato artesanal',
            nombreArtesano: 'Juan',
            descripcion: 'Zapatos de cuero de diferentes modelos',
            img2: 'assets/img/artesanias/zapatos.jpg',
            lugarOrigen: 'León, Guanajuato',
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
