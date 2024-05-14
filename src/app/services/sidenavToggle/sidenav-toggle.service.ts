// sidenav-toggle.service.ts
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavToggleService {
  private sidenav: MatSidenav | undefined;

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  toggle() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
