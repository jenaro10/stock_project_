import { Producto } from './../models/producto';
import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre = '';
  descripcion = '';
  buyDate: Date;  
  creationDate: Date;  
  imageURL = '';
  precio: number = null;
  status = '';
  locationBelongs = '';
  actuallocation = '';



  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const producto = new Producto(this.nombre, this.descripcion, this.buyDate, this.creationDate, this.imageURL, this.precio, this.status, this.locationBelongs, this.actuallocation);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }

}
