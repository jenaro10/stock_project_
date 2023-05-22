import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface EditarProductoResponse {
  message: string;
  properties: Producto[];
}

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = null;
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const _id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(_id).subscribe(
      data => { 
        console.log(data); 
          // @ts-ignore
        this.producto = data.property;
        
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  onUpdate(): void {
    const _id = this.activatedRoute.snapshot.params.id;
    this.productoService.update(_id, this.producto).subscribe(
      response => {
        this.assignResponseToProductos(response);
        console.log(response);
        this.toastr.success(response.message, 'OK', {
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

  assignResponseToProductos(response: EditarProductoResponse): void {
    this.productos = response.properties;
  }

}
