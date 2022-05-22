import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})

export class Punto2Component implements OnInit {


  tipoElegido = "elementos";
  tipos = ['nombres', 'elementos', 'lenguajes de programacion']
  lenguajesProgra = ['C++','JAVA','RUBY','PHP','C#','','PYTHON','HTML','SQL','MATLAB','.NET'];
  nombres = ['JUAN','PEDRO','TIAGO','PABLO','ROBERTO','ESTEFANO','JULIO','MARTIN','MAURICIO','ALBERTO','MAXIMILIANO'];
  elementos = ['RADIO', 'NOBIO', 'HIDROGENO', 'CESIO', 'RUBIDIO', 'MAGNESIO', 'SODIO', 'TENESO', 'RADON', 'INDIO', 'SODIO']
  Lista = ['RADIO', 'NOBIO', 'HIDROGENO', 'CESIO', 'RUBIDIO', 'MAGNESIO', 'SODIO', 'TENESO', 'RADON', 'INDIO', 'SODIO'];

  randomNumber = 0;
  palabra = ""
  palabraOculta = '_ ';
  intentos = 0;
  eligio = false; 
  gano = false; 
  perdio = false; 

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '+'];
constructor(
){
  
}
cambiarTipo(tipo: string){
 this.tipoElegido = tipo
  if (this.tipoElegido === 'lenguajes de programacion'){
    this.Lista = this.lenguajesProgra;
  }
  else if (this.tipoElegido === 'nombres'){
    this.Lista = this.nombres;
  }
  else{
    this.Lista = this.elementos
  }

  this.generarPalabra()

}
generarPalabra(){
  this.randomNumber = Math.floor(Math.random() * this.Lista.length);

  this.palabra = this.Lista[this.randomNumber];

  this.palabraOculta = '_ '.repeat(this.palabra.length); 

  this.eligio = true;

}
comprobar(letra: string){
      
  this.existeLetra(letra); 
  const palabrasOcultaArr = this.palabraOculta.split(' '); 

 for(let i=0; i<this.palabra.length; i++){

  if(this.palabra[i] === letra){
    palabrasOcultaArr[i] = letra; 
    
  }

 }
 
 this.palabraOculta = palabrasOcultaArr.join(' ');
 this.verificaGane(); 

}

verificaGane(){
  const palabraArr = this.palabraOculta.split(' '); 
  const palabraEvaluar = palabraArr.join(''); 

  if(palabraEvaluar === this.palabra){
    this.gano = true; 
    console.log('FELICIDADES! Has ganado'); 
  }

  if(this.intentos >= 7){
    this.perdio = true; 
    console.log('Lo siento, has perdido'); 
  }
  
}

existeLetra(letra: string){
  if(this.palabra.indexOf(letra) >= 0){
  }else{
    this.intentos++; 
  }
}

reinciar(){
  this.randomNumber = 0;
  this.palabra = ""
  this.palabraOculta = '_ ';
  this.intentos = 0;
  this.eligio = false; 
  this.gano = false; 
  this.perdio = false;
}

ngOnInit(): void {
  
}

}