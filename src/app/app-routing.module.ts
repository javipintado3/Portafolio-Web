import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: HomeComponent },  // Si "proyectos" está dentro de HomeComponent
  { path: 'sobre-mi', component: HomeComponent },  // Si "sobre-mi" está dentro de HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
