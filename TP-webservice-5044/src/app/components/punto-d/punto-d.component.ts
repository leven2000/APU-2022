import { Component, OnInit } from '@angular/core';
import { PuntoDService } from 'src/app/services/punto-d.service';
@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {
  
  url!:string;
  qr = "/assets/qr.jpg"
  mostrar = false;
  constructor(private qrservice:PuntoDService) { }

  ngOnInit(): void {
  }

  generarQr(){
    this.qrservice.getQrcode(this.url).subscribe(
      result =>{
        this.qr = result.url;
        this.mostrar = true;
      },
      error =>{

      }
      
    )
  }
}
