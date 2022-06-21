import { Component, OnInit } from '@angular/core';
import { PasajeService } from 'src/app/services/pasaje.service';
import { Pasaje } from 'src/app/models/pasaje';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css']
})
export class PasajesComponent implements OnInit {

  pasajes!:Array<Pasaje>

  constructor(private pasajeService: PasajeService) { 
    this.cargarPasajes();
  }

  ngOnInit(): void {
  }

  cargarPasajes(){
    this.pasajes = new Array<Pasaje>();
    this.pasajeService.getPasajes().subscribe(
      result =>{
        var unPasaje= new Pasaje();
        result.forEach((element:any) => {
          Object.assign(unPasaje, element);
          this.pasajes.push(unPasaje)
          unPasaje= new Pasaje()          
        });
        console.log(this.pasajes)
      },
      error=>{
      }
    )
  }

  eliminarPasaje(id: string){
    this.pasajeService.deletePasaje(id).subscribe(
      result =>{
        this.cargarPasajes()
        console.log(this.pasajes);
      },
      error=>{
      }
    )
  }
}
