import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  idPeliculas: string[] = ["61e8a4c3f2eb8ced20633f4a", "61e8a4bdf2eb8ced20633f45", "61e8a4b6f2eb8ced20633f38", "61e8a4b5f2eb8ced20633f35", "61e8a499f2eb8ced20633f0f", "61e8a498f2eb8ced20633f0b"]
  peliculas!: Array<Pelicula>
  pelicula!:Pelicula

  constructor(private peliculasService: PeliculasService) {
    this.cargarPeliculas()  
  }
   mandarPelicula(){
    this.cargarPeliculas();
   }

   cargarPeliculas(){
    this.peliculas  = [

    ]
      for(let id of this.idPeliculas){
        this.peliculasService.details(id).subscribe(
          result =>{
            this.pelicula = new Pelicula()
            this.pelicula.img = result.result.image
            this.pelicula.descripcion = result.result.description
            this.pelicula.rate = result.result.rating
            this.pelicula.title = result.result.title
            this.peliculas.push(this.pelicula)
            console.log(result)
            console.log(this.peliculas)
          },
          error=>{
            
          }
        )
       }
    
    }


  ngOnInit(): void {
  }

}
