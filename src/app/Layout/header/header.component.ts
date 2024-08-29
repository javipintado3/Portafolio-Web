import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollToSection(section: string): void {
    this.router.navigate(['/home'], { fragment: section }).then(() => {
      this.viewportScroller.scrollToAnchor(section);
    });
  }
}
