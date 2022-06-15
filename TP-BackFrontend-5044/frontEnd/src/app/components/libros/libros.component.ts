import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from 'src/app/models/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros!:Array<Libro>
  constructor(private librosService:LibroService) { 
    this.cargarLibros()
  }

  ngOnInit(): void {
  }

  cargarLibros(){
    this.libros = new Array<Libro>();
    this.librosService.getDestacados().subscribe(
      result =>{
        var unLibro= new Libro();
        result.forEach((element:any) => {
          Object.assign(unLibro, element);
          this.libros.push(unLibro)
          unLibro= new Libro()          
        });
        console.log(this.libros)
      },
      error=>{

      }
    )
  }
}
