import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  
  noticias: Array<Noticia> = [];
  indice:number=0;
  noticia:Noticia = new Noticia();

  constructor() { 
    this.noticias = new Array<Noticia>();
    this.noticias = [{id:1, nombre:"Volcán: Bomberos caminaron 8 horas para rescatar a una menor",detalle:"Había sufrido una lesión en la localidad de Alto del Volcán, por lo que el personal debió trasladarse hasta el lugar.",img:"imgnoticia1.png"},
    {id:1, nombre:"Eclipse solar en Jujuy: así se vio",detalle:"El eclipse solar se pudo ver en Jujuy, solo en algunos lugares, sobre todo en las Salinas Grandes, y pudieron tomar imagenes especiales.",img:"imgnoticia2.png"},
    {id:1, nombre:"Nasa: cómo fue el aterrizaje del Perseverance a Marte",detalle:"Para tomar las mejores imágenes de este aterrizaje, se utilizó un helicóptero que logró la mejor documentación.",img:"imgnoticia3.png"},
    {id:1, nombre:"La Gran Carrera de Autos Clásicos en San Salvador de Jujuy",detalle:"Cerca de las 11 de la mañana los autos clásicos pasaron por San Salvador de Jujuy con destino a Purmamarca. Volverán por la tarde.",img:"imgnoticia4.png"},
    {id:1, nombre:"Boca ganó 2 a 0 a Barracas: con Pipa y VAR, a cuartos",detalle:"Boca logró una victoria por 2 a 0 ante Barracas Central con una actuación para sacarse el sombrero de Benedetto y la presencia del VAR que anuló algunas jugadas",img:"imgnoticia5.png"},
    {id:1, nombre:"Según una medición la pobreza afecta al 55% de la Argentina",detalle:"Consiste en un índice que diseña un organismo que depende de Presidencia y que incluye variables monetarias y estructurales para evaluar la pobreza en el país.",img:"imgnoticia6.png"}
    ];
    this.iniciar();
  }

 
  iniciar(){
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }


  anterior(){
    this.indice = this.indice -1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }

  }



  ngOnInit(): void {
  }
}
