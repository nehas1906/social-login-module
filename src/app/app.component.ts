import { Component, OnInit } from '@angular/core';
import {SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider} from 'ng4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SocialLoginPage';
  public user: any = SocialUser;
  authService: any;
  loggedIn: boolean;
  name: string;
  email: any;

  constructor(private socailAuthService: AuthService ) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    // this.socailAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);

    // });
   // this.user = JSON.parse(localStorage.getItem('user'));
  }

  googleLogIn() {
    this.socailAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
           this.user = userData;
           console.log(this.user);
        });
    }

    FBLogIn() {
      this.socailAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
             this.user = userData;
             console.log(this.user);
          });
      }

      LinkdInLogin() {

        this.socailAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then((userData) => {
               this.user = userData;
               console.log(this.user);
            });
        }
}
