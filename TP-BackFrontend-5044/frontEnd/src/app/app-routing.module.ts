import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'libros', component:LibrosComponent},
  {path:'transacciones', component:TransaccionComponent},
  {path:'pasajes', component:PasajesComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
