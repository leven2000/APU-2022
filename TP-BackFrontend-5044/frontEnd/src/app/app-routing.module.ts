import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AltaLibrosComponent } from './components/libros/alta-libros/alta-libros.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { AltaPasajesComponent } from './components/pasajes/alta-pasajes/alta-pasajes.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'agregarlibros', component:AltaLibrosComponent},
  {path:'libros', component:LibrosComponent},
  {path:'transacciones', component:TransaccionComponent},
  {path:'pasajes', component:PasajesComponent},
  {path:'agregarpasajes', component:AltaPasajesComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
