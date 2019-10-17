import { Injectable } from '@angular/core';


@Injectable()
export class ArtesaniasService {

    private artesanias: Artesania[] = [
        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/tenangoCojin.jpg',
            lugarOrigen: 'Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/tenangoCojin.jpg',
            lugarOrigen: 'Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/tenangoCojin.jpg',
            lugarOrigen: 'Hidalgo',
            fecha: '2019-02-03'
        },
        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/tenangoCojin.jpg',
            lugarOrigen: 'Hidalgo',
            fecha: '2019-02-03'
        },

        {
            nombreArtesania: 'Cojin Bordado',
            nombreArtesano: 'Juan',
            descripcion: 'Cojin bordado con hilo blabla',
            img2: 'assets/img/tenangoCojin.jpg',
            lugarOrigen: 'Hidalgo',
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
