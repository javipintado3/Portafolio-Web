import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ContactosComponent } from './Components/contactos/contactos.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'sobremi', component:SobreMiComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'contacto',component:ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
