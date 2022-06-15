import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  urlBase:string="http://localhost:3000/api/libro/"

  constructor(private _http:HttpClient) { }

  public getDestacados(): Observable<any>{

    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase + "destacados")
  }

}
