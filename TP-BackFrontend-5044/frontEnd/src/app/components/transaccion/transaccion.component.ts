import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { DivisaService } from 'src/app/services/divisa.service';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from 'src/app/models/transaccion';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transaccion!:Transaccion;
  moneda1!: string;
  moneda2!: string;
  email!:string;

  transacciones!: Array<Transaccion>
  divisa: Divisa;
  a: any;

  constructor(private divisa_servicio: DivisaService, private transaccionService: TransaccionService) {
    this.divisa = new Divisa();
  }

  ngOnInit() {
   

  }

  public devolverDiv(val: HTMLInputElement) {
    console.log(val.valueAsNumber, this.moneda1, this.moneda2);
    this.transaccion = new Transaccion();
    this.transaccion.cantidadOrigen = val.valueAsNumber;
    this.divisa_servicio.getDiv(this.moneda1, this.moneda2, val.valueAsNumber).subscribe(
      (result) => {
        this.a = result;
        console.log();
        this.transaccion.cantidadDestino = result.result;
        this.postTransaccion()
      },

      (error) => { alert("error de peticion"); })
      
  }

  public postTransaccion(){
    this.transaccion.monedaOrigen = this.moneda1;
    this.transaccion.monedaDestino = this.moneda2;
    this.transaccion.emailCliente = this.email;
    this.transaccion.tasaConversion = this.transaccion.cantidadOrigen/this.transaccion.cantidadDestino

    this.transaccionService.postTransaccion(this.transaccion).subscribe(
      result =>{
        console.log(result)
        this.getTransacciones()
      },
      error=>{
      }
    )
  }

  public getTransacciones(){
    this.transacciones = new Array<Transaccion>();
    this.transaccionService.getTransacciones().subscribe(
      result =>{
       var unaTransaccion = new Transaccion();
       result.forEach((element:any)=>{
        Object.assign(unaTransaccion, element);
        this.transacciones.push(unaTransaccion)
        unaTransaccion = new Transaccion()
       });
       console.log(this.transacciones);
      },
      error =>{

      }
    )
  }
}

