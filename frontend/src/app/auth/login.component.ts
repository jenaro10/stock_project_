import { LoginUsuarioDto } from './../models/login-usuario.dto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: LoginUsuarioDto = null;

  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.usuario = new LoginUsuarioDto(this.username, this.password);
    this.authService.login(this.usuario).subscribe(
      data => {
         console.log(data)
         console.log(this.usuario);
         if (!data.access_token) {
          this.toastrService.error(data.message, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        } else {
          this.tokenService.setToken(data.access_token);
          this.router.navigate(['/']);
        }        
      },
      err => {
        console.log(err)
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
