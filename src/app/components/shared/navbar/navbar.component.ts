import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ,private modalService: NgbModal) { }

  ngOnInit() {
  }

  buscarArtesano( termino: string ) {
    // console.log(termino);
    this.router.navigate( ['/buscar', termino] );
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }


}
