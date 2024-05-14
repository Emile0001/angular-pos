import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme/theme.service';
import { HeaderComponent } from './nav/header/header.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { FooterComponent } from './nav/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cutting Edge';

  themeService: ThemeService = inject(ThemeService);
}
