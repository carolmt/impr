import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostProps } from '../../Interfaces/post.interface';
import {
  ChargeFile,
  Variable,
} from '../../Interfaces/variablesValues.interface';
import { PLC3, PLCList } from '../../Interfaces/plcList.interface';
import { ConfigService } from '../ConfigService/config.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  httpClient = inject(HttpClient);
  URL_BASE: string;

  constructor(private configService: ConfigService) {
    this.URL_BASE = this.configService.getURL_BASE();
    console.log(this.URL_BASE);
  }

  getPrinterStatus(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}`, { headers })
      .pipe((res) => res);
  }

  //Para la impresion
  getStopPrinting(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/stop`, { headers })
      .pipe((res) => res);
  }

  //Muestra la imagen cargada o los colores que pinta
  getImgFromCurrentMessage(color: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(`${this.URL_BASE}/prev/` + color, {
      responseType: 'blob',
    });
  }

  //Muestra las variables y valores de la imagen cargada.
  getVariablesAndValues(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/lstvar`, { headers })
      .pipe((res) => res);
  }

  //mostrar los mensajes del controlador.
  getControllerMessages(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/lstlay`, { headers })
      .pipe((res) => res);
  }

  //borra el mensaje para siempre.
  getDeleteMsg(msg: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/del/` + msg, { headers })
      .pipe((res) => res);
  }

  //ver registros PLC
  getPlcLogs(plcNum: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/plclst/` + plcNum, { headers })
      .pipe((res) => res);
  }

  //Previsualiza un mensaje almacenado en el controlador
  getImgFromCtrl(file: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(`${this.URL_BASE}/prevl/` + file, {
      responseType: 'blob',
    });
  }

  //Lista de imágenes en el controlador
  getListOfImg(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .get(`${this.URL_BASE}/lstimg`, { headers })
      .pipe((res) => res);
  }

  /*metodos PUT*/

  //Cambio de las propiedades del mensaje actual
  putUpdatePropierties(propierty: PostProps) {
    //solo funciona con width de momento.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .put(`${this.URL_BASE}/layout`, propierty, { headers })
      .pipe((res) => res);
  }

  //Cambio de los valores de algunas de las variables del mensaje actual
  putUpdateCurrentVariables(variables: Variable[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .put(`${this.URL_BASE}/vars`, variables, { headers })
      .pipe((res) => res);
  }

  //Cambio del mensaje actual y sus variables
  putNewMsgAndVariables(file: ChargeFile): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .put(`${this.URL_BASE}/impr`, file, { headers })
      .pipe((res) => res);
  }

  //Escribe una lista de valores en los registros del PLC
  putListOfValuesPlc(registros: PLC3[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient
      .put(`${this.URL_BASE}/plcwrt`, registros, { headers })
      .pipe((res) => res);
  }
}
