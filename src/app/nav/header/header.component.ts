import {
  Component,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../services/theme/theme.service';

import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, SideNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }

  @Output() toggleSideNavEvent = new EventEmitter<{
    toggleSideNavState: string;
  }>();

  //   onToggleSideNav(toggleSideNavState: string) {
  //     toggleSideNavState === 'opened' ? 'closed' : 'opened';
  //   }
}
