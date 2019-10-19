import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ArtesanosService } from './servicios/artesanos.service';
import { ArtesaniasService } from './servicios/artesanias.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArtesanosComponent } from './components/artesanos/artesanos.component';
import { ArtesanoComponent } from './components/artesano/artesano.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtesanoTarjetaComponent } from './components/artesano-tarjeta/artesano-tarjeta.component';
import { ArtesaniasComponent } from './components/artesanias/artesanias.component';
import { ArtesaniaComponent } from './components/artesania/artesania.component';
import { LoginModule } from './login/login.module';
import { FooterComponent } from './components/shared/footer/footer.component';




@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArtesanosComponent,
    ArtesanoComponent,
    BuscadorComponent,
    ArtesanoTarjetaComponent,
    ArtesaniasComponent,
    ArtesaniaComponent,
    FooterComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    APP_ROUTING,
    LoginModule
  ],
  providers: [
    ArtesanosService,
    ArtesaniasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
