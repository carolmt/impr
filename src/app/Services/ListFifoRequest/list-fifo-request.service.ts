import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../ConfigService/config.service';

@Injectable({
  providedIn: 'root'
})
export class ListFifoRequestService {

  httpClient = inject(HttpClient);
  URL_BASE : string;

  constructor(private configService: ConfigService) {
    this.URL_BASE = this.configService.getURL_BASE();
    console.log(this.URL_BASE);
  }

  //Selecciona un elemento de la lista de mensajes preparados y lo inserta en el FIFO
  getInsertFifo(numMsg:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type' : 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(`${this.URL_BASE}/fifos/`+numMsg, { headers }).pipe(res => res);
  }

  //mostrar variables del mensaje cargado
  getVariablesAndValues(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(`${this.URL_BASE}/lstvar`, { headers }).pipe(res => res);
  }
}
