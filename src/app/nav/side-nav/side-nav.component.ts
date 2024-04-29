import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, HeaderComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSidenavOpened: boolean = true;

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpened = this.sidenav.opened;
  }
}
