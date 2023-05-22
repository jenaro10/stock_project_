import { TokenService } from '../services/token.service';
import { AuditoryService } from '../services/auditory.service';
import { Auditory } from  '../models/auditory';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { AuditoryResponse } from './auditoryinterface';

@Component({
  selector: 'app-lista-auditoria',
  templateUrl: './lista-auditoria.component.html',
  styleUrls: ['./lista-auditoria.component.css']
})
export class ListaAuditoriaComponent implements OnInit {

  auditories: Auditory[] = [];
  filtroRoom: string = '';
  listaVacia = undefined;

  isAdmin: boolean;

  constructor(
    private AuditoryService: AuditoryService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarAuditories();
    console.log(this.auditories)
    this.isAdmin = this.tokenService.isAdmin();
    console.log(this.isAdmin);
  }

  cargarAuditories(): void {
    this.AuditoryService.lista().subscribe(
      (response: AuditoryResponse) => {
        console.log(response);
        this.auditories = response.auditory;
        console.log(this.auditories);
        this.listaVacia = undefined;

        console.log(this.auditories);
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    
  }
  filtrarAuditorias(): void {
    // Llamar al servicio para obtener las auditorías filtradas por room
    this.AuditoryService.getAuditoriesByRoom(this.filtroRoom).subscribe(
      (response: AuditoryResponse) => {
        this.auditories = response.auditory;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }
  
  
}
