/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from './../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn;
  private userLogged: User;

  private userProfileObservable: BehaviorSubject<Profile> =
    new BehaviorSubject<Profile>(null);

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: User) {
    this.userLogged = user;
    this.isUserLoggedIn = true;
    this.setLocalStorageUser('currentUser');

    // cargo el dato para retornar luego el observable
    this.setProfileUserObservable();
  }

  getUserLoggedIn() {
    return JSON.parse(this.getLocalStorageUser('currentUser'));
  }

  private setLocalStorageUser(key: string = 'currentUser') {
    localStorage.setItem(key, JSON.stringify(this.userLogged));
  }

  private getLocalStorageUser(key: string = 'currentUser') {
    return localStorage.getItem(key);
  }

  public getIsUserLoggedIn() {
    const user = this.getUserLoggedIn();
    // console.log(user);

    if (typeof user !== 'undefined' && user !== null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Obtengo el perfil de usuario para renderizar en algun componente
   */
  getProfileUser(): any {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(this.getLocalStorageUser());
    }
  }

  setProfileUserObservable() {
    const profileTempPromise = new Promise((resolve, reject) => {
      const profileTemp = this.getProfileUser();

      if (profileTemp !== null) {
        resolve(
          this.userProfileObservable.next(profileTemp.profileUserJwt.usuario)
        );
      }
    });
  }

  getProfileUserObservable(): Observable<Profile> {
    return this.userProfileObservable.asObservable();
  }

  /**
   * Obtiene el token jwt del storage
   */
  jwtTokenGetter() {
    const currentUser = JSON.parse(this.getLocalStorageUser());
    const token =
      currentUser === null ? false : currentUser.profileUserJwt.token;
    return token;
  }

  /**
   * Obtiene el cuil del usuario desde el storage
   */
  getCuil() {
    const currentUser = JSON.parse(this.getLocalStorageUser());
    const cuil =
      currentUser === null ? false : currentUser.profileUserJwt.usuario.cuil;
    return cuil;
  }

  /**
   * Retorna los establecimientos del usuario logueado
   */
  getEstablecimientos() {
    const currentUser = JSON.parse(this.getLocalStorageUser());
    const establecimientos =
      currentUser === null
        ? false
        : currentUser.profileUserJwt.usuario.establecimientos;
    return establecimientos;
  }

  getFotoProfile() {
    const currentUser = JSON.parse(this.getLocalStorageUser());
    const fotoProfile =
      currentUser === null ? false : currentUser.profileUserJwt.usuario.foto;
    return fotoProfile;
  }
}
