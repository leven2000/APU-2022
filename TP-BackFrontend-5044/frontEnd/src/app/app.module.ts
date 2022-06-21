import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { FormsModule } from '@angular/forms';
import { AltaLibrosComponent } from './components/libros/alta-libros/alta-libros.component';
import { AltaLibroComponent } from './compoments/libros/alta-libro/alta-libro.component';
import { AltaPasajesComponent } from './components/pasajes/alta-pasajes/alta-pasajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LibrosComponent,
    TransaccionComponent,
    PasajesComponent,
    AltaLibrosComponent,
    AltaLibroComponent,
    AltaPasajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
