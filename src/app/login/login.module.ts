import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionInfoComponent } from './session-info/session-info.component';
import { BuyerComponent } from './buyer-component/buyer-component.component';
import { CraftmanRegisterComponent } from './craftman-register/craftman-register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SessionInfoComponent, 
    BuyerComponent,
    CraftmanRegisterComponent,
    LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
