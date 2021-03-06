import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_content;
 
  constructor(public activeModal: NgbActiveModal) {}
 
  ngOnInit() {
  }

}
