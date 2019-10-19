import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionInfoComponent } from './session-info/session-info.component';
import { BuyerComponent } from './buyer-component/buyer-component.component';
import { CraftmanRegisterComponent } from './craftman-register/craftman-register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SessionInfoComponent, 
    BuyerComponent,
    CraftmanRegisterComponent,
    LoginComponent//,
    //RouterModule],
  ],
    imports: [
    CommonModule,
    NgbModule
  ],
  entryComponents:[
    LoginComponent
  ]
})
export class LoginModule { }
