
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtesanosComponent } from './components/artesanos/artesanos.component';
import { ArtesanoComponent } from './components/artesano/artesano.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ArtesaniasComponent } from './components/artesanias/artesanias.component';
import { ArtesaniaComponent } from './components/artesania/artesania.component';
import { LoginComponent } from './login/login/login.component';
import { CraftmanRegisterComponent } from './login/craftman-register/craftman-register.component';
import { BuyerComponent } from './login/buyer-component/buyer-component.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artesanos', component: ArtesanosComponent },
  { path: 'artesano/:id', component: ArtesanoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'artesanias', component: ArtesaniasComponent },
  {path: 'artesania/:id', component: ArtesaniaComponent },
  {path: 'regisArtesano', component: CraftmanRegisterComponent},
  {path: 'regisComprador', component: BuyerComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
