import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
mport{HttpCliientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TraductorComponent,
    PeliculasComponent,
    ConversorComponent,
    PuntoDComponent
   

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
