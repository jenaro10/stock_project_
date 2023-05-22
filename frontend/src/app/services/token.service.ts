import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(access_token: string): void {
    localStorage.setItem('access_token', access_token);
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  getNombreUsuario(): string {
    if (!this.isLogged()) {
      return null;
    }
    const access_token = this.getToken();
    const payload = access_token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    console.log(valuesJson)
    const name = valuesJson.name;console.log(name)
    return name;
    
  }

  isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const access_token = this.getToken();
    const payload = access_token.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson.role;
    if (roles == 'ADMIN') {
      return true;
    }
    return false;
}


  logOut(): void {
    localStorage.clear();
  }
}
