
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtesanosComponent } from './components/artesanos/artesanos.component';
import { ArtesanoComponent } from './components/artesano/artesano.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtesaniasComponent } from './components/artesanias/artesanias.component';
import { ArtesaniaComponent } from './components/artesania/artesania.component';
import { LoginComponent } from './login/login/login.component';
import { CraftmanRegisterComponent } from './login/craftman-register/craftman-register.component';
import { BuyerComponent } from './login/buyer-component/buyer-component.component';
import {AboutComponent } from './components/about/about.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { JuguetesComponent } from './components/juguetes/juguetes.component';
import { JoyeriaComponent } from './components/joyeria/joyeria.component';
import { TextilesComponent } from './components/textiles/textiles.component';
import {MueblesComponent } from './components/muebles/muebles.component';
import {CeramicaComponent } from './components/ceramica/ceramica.component';
import { VistaProcesoComponent } from './components/vistaProceso/vista-proceso/vista-proceso.component';




const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artesanos', component: ArtesanosComponent },
  { path: 'artesano/:id', component: ArtesanoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'artesanias', component: ArtesaniasComponent },
  {path: 'artesania/:id', component: ArtesaniaComponent },
  {path: 'regisArtesano', component: CraftmanRegisterComponent},
  {path: 'regisComprador', component: BuyerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'instrumentos', component: InstrumentosComponent },
  {path: 'juguetes', component: JuguetesComponent },
  {path: 'joyeria', component: JoyeriaComponent },
  {path: 'textiles', component: TextilesComponent },
  {path: 'muebles', component: MueblesComponent },
  {path: 'ceramica', component: CeramicaComponent },
  {path: 'procesos', component: VistaProcesoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
