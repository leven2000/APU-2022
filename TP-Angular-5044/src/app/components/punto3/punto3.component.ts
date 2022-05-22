import { Component, OnInit } from '@angular/core';
import { Pasajes } from 'src/app/models/pasajes';
import {PasajesService} from '../../services/pasajes.service'
@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  
  precioInicial = 0;
  mostrar1 = false;
  mostrar2 = false;
  precioFinal = 0;
  tipoActual =  ""
  pasaje!:Pasajes
  tituloform = "Compra pasajes";
  pasajes:any[] = [];

  constructor(private _servicio:PasajesService) { 
    this.pasajes = _servicio.getPasajes()
    this.pasaje = new Pasajes()
  }
  agregarPasaje(pasaje: Pasajes){

    pasaje.fechaCompra = new Date();
    pasaje.categoriaPasajero = this.tipoActual;
    pasaje.precioPasaje = this.precioFinal
    this._servicio.addPasajes(this.pasaje)
    this.pasaje = new Pasajes()
    this.mostrar2 = false;
    this.precioFinal = 0;
    this.precioInicial = 0;
  }
  calcularPrecio(precio: number, Tipo:string){
    if(precio != 0  ){
      this.mostrar2 = true;
      if (Tipo === "Menor"){
        this.precioFinal = precio*0.75;
      }
      else if (Tipo === "Jubilado"){
        this.precioFinal = precio/2;
      }
      else{
        this.precioFinal = precio
      }
      console.log(this.precioFinal)
    }
  }

  cambiarTipo(tipo: string){
    this.tipoActual = tipo;
    this.mostrar1 = true;
    this.calcularPrecio(this.precioInicial, tipo)
  }
  eliminarPasaje(dni: number){
    this._servicio.deletePasaje(dni)
  }

  ngOnInit(): void {
      
  }

 

}


