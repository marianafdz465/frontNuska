import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtesanoregistroComponent } from './artesanoregistro/artesanoregistro.component';
import { CompradorregistroComponent } from './compradorregistro/compradorregistro.component';
import { LogininfoComponent } from './logininfo/logininfo.component';



@NgModule({
  declarations: [
    ArtesanoregistroComponent, 
    CompradorregistroComponent,
    LogininfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
