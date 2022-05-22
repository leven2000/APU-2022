import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntoDComponent } from './components/punto-d/punto-d.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'traductor', component:TraductorComponent},
  {path: "peliculas", component:PeliculasComponent},
  {path: "conversor", component:ConversorComponent},
  {path: "qr", component:PuntoDComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
