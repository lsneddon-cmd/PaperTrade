import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { DeviceComponent } from './device/device.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingViewComponent,
    DeviceComponent,
    PrivacyComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
