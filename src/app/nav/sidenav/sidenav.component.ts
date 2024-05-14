import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavToggleService } from '../../services/sidenavToggle/sidenav-toggle.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private sidenavToggleService: SidenavToggleService) {}

  ngAfterViewInit() {
    this.sidenavToggleService.setSidenav(this.sidenav);
  }
}
