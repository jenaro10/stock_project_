import { TokenService } from './../services/token.service';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { ProductoResponse } from './productointerface';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private productoService: ProductoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
    console.log(this.isAdmin);
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (response: ProductoResponse) => {
        this.productos = response.properties;
        console.log(this.productos);
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }
  

  borrar(_id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(_id.toString()).subscribe(
          res => this.cargarProductos(),
          error => console.error(error)
        );
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });
  }
  
  


}
