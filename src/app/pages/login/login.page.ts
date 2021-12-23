import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  async login() {
    const user = await GoogleAuth.signIn();
    console.log(user);

    const usuarioResult: User = {
      profileUserJwt: user,
      token: user.authentication.accessToken,
      accessTokenExpiresDate: null
    };

    this.userService.setUserLoggedIn(usuarioResult);
    // go home
    this.router.navigate(['home']);
  }

}
