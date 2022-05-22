import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http: HttpClient) { }
  public details( id: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',

        'X-RapidAPI-Key': '00a57a7584mshad4ed83499ddfd8p1ae009jsnbf7f3d9cff43'


      }),
    }
    return this._http.get(`https://movies-app1.p.rapidapi.com/api/movie/${id}`,  httpOptions);
  }
}
