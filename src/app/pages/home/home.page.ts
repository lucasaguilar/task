import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { DataService, Message } from './../../services/data.service';
import { Plugins, Plugin } from '@capacitor/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userProfile = null;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ionViewDidEnter() {
    // GoogleAuth.init();
  }

  registrarEvento(){
    console.log('registrar evento');
    this.router.navigate(['event']);
  }

  listarEventos(){
    console.log('listar eventos');
    this.router.navigate(['event-list']);
  }

  logout() {
    GoogleAuth.signOut().then(() => {
      console.log('logout from google');
      this.router.navigate(['login']);
    });
  }

}
