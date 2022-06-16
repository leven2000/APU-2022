import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlBase:string="http://localhost:3000/api/transacciones/"

  constructor(private _http:HttpClient) { }
  
  public getTransacciones():Observable<any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase)
  }
 
  public postTransaccion(transaccion:Transaccion): Observable<any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({
         
      })
    };
    
    return this._http.post(this.urlBase, transaccion)
  }
}
