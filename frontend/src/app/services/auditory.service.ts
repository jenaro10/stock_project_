import { Auditory } from './../models/auditory';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class AuditoryService {

  auditoryURL = environment.auditoryURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<{ message: string, auditory: Auditory[] }> {
    return this.httpClient.get<{ message: string, auditory: Auditory[] }>(`${this.auditoryURL}`);
  }
  public getAuditoriesByRoom(room: string): Observable<{ message: string, auditory: Auditory[] }> {
    return this.httpClient.post<{ message: string, auditory: Auditory[] }>(`${this.auditoryURL}`, { room });
  }
  
}