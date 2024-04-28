import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './nav/header/header.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme/theme.service';
import { SideNavComponent } from './nav/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cutting Edge';

  themeService: ThemeService = inject(ThemeService);
}
