import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private URL_BASE = 'http://localhost:8080/api';

  constructor() { }

  getURL_BASE(): string {
    return this.URL_BASE;
  }

  setURL_BASE(newUrl: string): void {
    this.URL_BASE = newUrl;
  }
}
