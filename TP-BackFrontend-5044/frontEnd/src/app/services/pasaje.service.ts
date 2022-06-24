import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pasaje } from '../models/pasaje';
@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase: string = "http://localhost:3000/api/pasajes/"
  
  constructor(private _http:HttpClient) { }
  public editPasaje(id:string, pasaje:Pasaje): Observable<any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({
         
      })
    };
    
    return this._http.put(this.urlBase + id, pasaje)
  }
  public postPasaje(pasaje:Pasaje): Observable<any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({
         
      })
    };
    
    return this._http.post(this.urlBase, pasaje)
  }

  public getPasajes():Observable<any>{

    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase )
  }

  public getPasaje(id:string): Observable <any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase + id)
  }

  public deletePasaje (id: string): Observable <any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.delete(this.urlBase + id)
  }
}
