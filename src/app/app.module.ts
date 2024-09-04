import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactosComponent } from './Components/contactos/contactos.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';

// Importaciones de Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Paquete de íconos "solid"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule  // Importa Font Awesome Module aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Configurar los iconos en el constructor
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);  // Agrega todos los íconos del paquete 'solid'
  }
}
