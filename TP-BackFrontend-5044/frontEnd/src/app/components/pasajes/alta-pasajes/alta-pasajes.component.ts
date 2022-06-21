import { Component, OnInit } from '@angular/core';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-alta-pasajes',
  templateUrl: './alta-pasajes.component.html',
  styleUrls: ['./alta-pasajes.component.css']
})
export class AltaPasajesComponent implements OnInit {

  documento= "";
  pasajeIngresado: Pasaje;
  personas!:Array<Persona>

  constructor(private pasajeService:PasajeService, private personaService:PersonaService) {
    this.pasajeIngresado = new Pasaje();
    this.cargarPersonas()
   }

  cargarPersonas(){
    this.personas = new Array <Persona>();
    this.personaService.getPersonas().subscribe(
      result =>{
        var unaPersona = new Persona();
        result.forEach((element:any)=>{
          Object.assign(unaPersona, element);
          this.personas.push(unaPersona);
          unaPersona= new Persona();
        });
        console.log(this.personas)
      },
      error=>{

      }
    )
  }

  cargarPasaje(){
    this.cargarPasajero()
    console.log(this.pasajeIngresado)

    this.pasajeService.postPasaje(this.pasajeIngresado).subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        
      }
    )
  }

  cargarPasajero(){
    for(let item of this.personas){
      if (item.nro_documento === this.documento){
          this.pasajeIngresado.pasajero = item;        
      }
    }
  }


  ngOnInit(): void {
  }

}
