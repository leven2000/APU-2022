import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlBase: string = "http://localhost:3000/api/personas/"
  
  constructor(private _http:HttpClient) { }

  public postPersona(persona:Persona): Observable<any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({
         
      })
    };
    
    return this._http.post(this.urlBase, persona)
  }

  public getPersonas():Observable<any>{

    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.get(this.urlBase )
  }

  public deletePersona (id: string): Observable <any>{
    const httpOptions = {
      Headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this._http.delete(this.urlBase + id)
  }
}
