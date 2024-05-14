import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { SidenavToggleService } from '../../services/sidenavToggle/sidenav-toggle.service';
import { SearchComponent } from './search/search.component';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ThemeToggleComponent,
    SearchComponent,
    NotificationsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private SidenavToggleService: SidenavToggleService) {}

  toggleSidenav() {
    this.SidenavToggleService.toggle();
  }
}
