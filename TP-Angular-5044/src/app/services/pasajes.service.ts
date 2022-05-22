import { Injectable } from '@angular/core';
import { Pasajes } from '../models/pasajes';

@Injectable({
  providedIn: 'root'
})
export class PasajesService {

  pasajes!: Array<Pasajes>;

  constructor() {
    this.pasajes = new Array<Pasajes>()
    this.pasajes = []
  }

  getPasajes(){
    return this.pasajes;
  }

  addPasajes(pasaje: Pasajes){
    this.pasajes.push(pasaje)
  }

  deletePasaje(dni: number){
    const eliminar = this.pasajes.findIndex(p => p._dniPasajero === dni );
    this.pasajes.splice(eliminar, 1)
  }
}
