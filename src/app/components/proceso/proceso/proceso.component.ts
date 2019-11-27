import { Component, OnInit,Input } from '@angular/core';
import { ProcesoModel } from './procesoModel';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {

  @Input ('data') data:ProcesoModel;
  video:string;
  constructor(private sanitizer:DomSanitizer) { 
  }

  ngOnInit() {
  }

  videoURL() {
    console.log(this.video);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }

}
