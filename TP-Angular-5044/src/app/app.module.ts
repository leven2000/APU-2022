import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//servicios 
import{PasajesService} from './services/pasajes.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PasajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
