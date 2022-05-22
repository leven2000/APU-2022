import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PuntoDService {

  constructor(private _http: HttpClient) { }

  public getQrcode (value:string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'codzz-qr-cods.p.rapidapi.com',
        'X-RapidAPI-Key': '00a57a7584mshad4ed83499ddfd8p1ae009jsnbf7f3d9cff43'
      }),
    }
    
    return this._http.get(`https://codzz-qr-cods.p.rapidapi.com/getQrcode?value=${value}&type=url`, httpOptions)
  }
}
