import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClinetModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LinkedinLoginProvider, FacebookLoginProvider } from 'ng4-social-login';

const config = new AuthServiceConfig([
{
id : GoogleLoginProvider.PROVIDER_ID,
provider : new GoogleLoginProvider('248654078854-mv8pt44j8jhvfulrl95pon2hg3nsq26u.apps.googleusercontent.com'),
},
{
  id : LinkedinLoginProvider.PROVIDER_ID,
  provider : new LinkedinLoginProvider('81jnpe8j29zxki'),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('847164359118870')
  }
], false);

export function provideConfig() {
  return config;
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SocialLoginModule, FormsModule
  ],
  providers: [{provide: AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
