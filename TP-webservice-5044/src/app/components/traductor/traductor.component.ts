import { Component, OnInit } from '@angular/core';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  lenguajeDetectado!: string;
  texto!: string;
  textoTraducido!:string
  lenguajeSeleccionado = '';
  constructor(private traductorService:TraductorService) { }

  ngOnInit(): void {
  }
  cambiarLenguaje(idioma: string){
    if (idioma === 'es'){
      this.lenguajeSeleccionado = 'es'
    }
    else  if (idioma === 'pt'){
      this.lenguajeSeleccionado = 'pt'
    }
    else  if (idioma === 'de'){
      this.lenguajeSeleccionado = 'de'
    }
    else  if (idioma === 'en'){
      this.lenguajeSeleccionado = 'en'
    }
    console.log(this.lenguajeSeleccionado)
  }

  traducir(){
    this.traductorService.translateText( this.lenguajeSeleccionado, this.texto).subscribe(
      result =>{
        this.textoTraducido = result.data.translations[0].translatedText;
        this.lenguajeDetectado = result.data.translations[0].detectedSourceLanguage;
        console.log (this.textoTraducido)
        console.log(this.lenguajeDetectado)
      },
      error=>{

      }
    )
  }
}
