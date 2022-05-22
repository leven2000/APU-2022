import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }
  public getDiv(moneda1: string, moneda2: string, val: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '1e1254ad9emsh9a47f8b290caa04p13f68bjsnaf9e03c5c6ce'
      })
    };
    return this._http.get(`https://fixer-fixer-currency-v1.p.rapidapi.com/convert?from=${moneda1}&to=${moneda2}&amount=${val}`, httpOptions);
  }

}
