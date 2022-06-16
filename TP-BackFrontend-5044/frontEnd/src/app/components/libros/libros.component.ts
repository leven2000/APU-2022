import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from 'src/app/models/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  indice:number=0;
  libros!:Array<Libro>
  libro:Libro = new Libro();

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
        this.iniciar();
      },
      error=>{

      }
    )
  }

  iniciar(){
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }
  }


  anterior(){
    this.indice = this.indice -1;
    if (this.indice < this.libros.length){
      this.libro = this.libros[this.indice];
    }

  }

}
