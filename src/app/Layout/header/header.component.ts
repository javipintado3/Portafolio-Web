import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive: boolean = false;  // Controla el estado del menú

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollToSection(section: string): void {
    this.router.navigate(['/home'], { fragment: section }).then(() => {
      this.viewportScroller.scrollToAnchor(section);
    });
    this.menuActive = false; // Cierra el menú al hacer clic en un enlace
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive; // Alterna el estado del menú
  }
}
