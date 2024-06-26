import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<string>('dark-theme');

  updateTheme() {
    this.themeSignal.update((value) =>
      value === 'dark-theme' ? 'light-theme' : 'dark-theme'
    );
  }
}
