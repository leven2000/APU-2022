import { Component, OnInit } from '@angular/core';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alta-pasajes',
  templateUrl: './alta-pasajes.component.html',
  styleUrls: ['./alta-pasajes.component.css']
})
export class AltaPasajesComponent implements OnInit {

  documento= "";
  pasajeIngresado: Pasaje;
  personas!:Array<Persona>

  accion: string = "new";

  constructor(private router:Router,private pasajeService:PasajeService, private personaService:PersonaService, private activatedRoute:ActivatedRoute) {
    this.pasajeIngresado = new Pasaje();
    this.cargarPersonas()
   }

  cargar(id: string){
    
    this.pasajeService.getPasaje(id).subscribe(
      result =>{
       console.log(result)
       this.pasajeIngresado = result[0]
       for(let item of this.personas){
        if (item._id = result[0].pasajero){
          this.documento = item.nro_documento;
        }
       }
      },
      error=>{

      }
    )
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
  actualizarPasaje(){
    this.pasajeService.editPasaje(this.pasajeIngresado._id, this.pasajeIngresado).subscribe(
      result=>{
        this.router.navigate(['/pasajes'])
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
        this.pasajeIngresado = new Pasaje();
        this.router.navigate(['/pasajes']);
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
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
      this.cargar(params['id']);
      }
    });      
  }

}
