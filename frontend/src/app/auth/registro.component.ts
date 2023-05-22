import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';
import { NuevoUsuarioDto } from './../models/nuevo-usuario.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: NuevoUsuarioDto = null;

  name: string;
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(this.name, this.username,this.password);
    this.authService.registro(this.usuario).subscribe(
      data => {
        console.log(data)
        this.toastrService.success(data.message, 'Cuenta creada con exito! Iniciar sesion', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
