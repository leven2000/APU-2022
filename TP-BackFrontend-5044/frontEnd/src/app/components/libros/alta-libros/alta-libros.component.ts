import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Libro } from 'src/app/models/libros';

@Component({
  selector: 'app-alta-libros',
  templateUrl: './alta-libros.component.html',
  styleUrls: ['./alta-libros.component.css']
})
export class AltaLibrosComponent implements OnInit {

  libro!:Libro
  nombre!:string
  descripcion!:string
  imagen!:string
  stock!:string
  destacado = false
  constructor(private librosService:LibroService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.libro = new Libro();
    this.libro.descripcion = this.descripcion;
    this.libro.libro = this.nombre;
    this.libro.imagen = this.imagen;
    this.libro.destacado = this.destacado;
    this.libro.stock = this.stock;

    this.librosService.postLibro(this.libro).subscribe(
      result =>{
        console.log(result)
        this.libro = new Libro();
      },
      error=>{

      }
    )
  }
}
