import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http: HttpClient) { }
  public translateText( target:string, text:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        'X-RapidAPI-Key': '00a57a7584mshad4ed83499ddfd8p1ae009jsnbf7f3d9cff43',
      }),
    }
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
    }
  }

