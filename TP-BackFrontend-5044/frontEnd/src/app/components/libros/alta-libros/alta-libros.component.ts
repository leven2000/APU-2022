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

  constructor(private librosService:LibroService) {this.libro = new Libro(); }

  ngOnInit(): void {
  }

  guardar(){
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
