import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/models/divisa';
import { DivisaService } from 'src/app/services/divisa.service';
@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moneda1!: string;
  moneda2!: string;

  divisa: Divisa;
  a: any;

  constructor(private divisa_servicio: DivisaService) {
    this.divisa = new Divisa();
  }

  ngOnInit() {
    this.divisa_servicio.getDiv("ARS", "USD", 10).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }

  public devolverDiv(val: HTMLInputElement) {
    this.divisa_servicio.getDiv(this.moneda1, this.moneda2, val.valueAsNumber).subscribe(
      (result) => {
        this.a = result;
        console.log();


      },


      (error) => { alert("error de peticion"); })

  }

}
