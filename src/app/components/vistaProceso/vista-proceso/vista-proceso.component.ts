import { Component, OnInit } from '@angular/core';
import { ProcesoModel } from '../../proceso/proceso/procesoModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcesoComponent } from '../../proceso/proceso/proceso.component';

@Component({
  selector: 'app-vista-proceso',
  templateUrl: './vista-proceso.component.html',
  styleUrls: ['./vista-proceso.component.css']
})
export class VistaProcesoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  private procesos : ProcesoModel[]=[
    { Titulo:"Alfarería cerámica",
      Autor: "Nina Sayuri",
      Artesano: "Angel Sanches Martines",
      Duracion: "0H:00M:36S",
      Descripcion: "En este video podemos ver como el señor Juan Antonio realiza sus obras con cerámica, mientras nos detalla que significan las artesanías que el mismo realiza y como desde su punto de vista es necesaria la preservación de este tipo de arte.",
      Url : 'https://www.youtube.com/embed/jLADV67Wq74',
      Image : 'assets/img/nuskaP1.png'
      
    },
    { Titulo:"Textiles",
      Autor: "Nina Sayuri",
      Artesano: "Maira Guadalupe Martines",
      Duracion: "0H:00M:45S",
      Descripcion: "Este video representa la esencia del trabajo con telares realizado por Maira Guadalupe Martines, en el nos explica el proceso de creación y fabricación de productos textiles y como su realización mantiene vivas las tradiciones.",
      Url : 'https://www.youtube.com/embed/nM6JXo6s7Wo',
      Image: 'assets/img/nuskaP2.png'
    },
    { Titulo:"Joyeria",
      Autor: "Nina Sayuri-Maria Isabel",
      Artesano: "Benjamín Correa Nava",
      Duracion: "0H:00M:36S",
      Descripcion: "El arte de la joyería presente en la vida de Benjamín Correa Nava, es una bella expresión con la cual se crean se piezas únicas, con las cuales nos intenta trasmitir belleza",
      Url : 'https://www.youtube.com/embed/rRlzLex88ZE',
      Image: 'assets/img/nuskaP3.png'
    }
  ];

  ngOnInit() {
  }

  openVideoModal(i:number){
    console.log(i);
    const modalRef = this.modalService.open(ProcesoComponent);
    modalRef.componentInstance.video= this.procesos[i].Url;
  }

}
