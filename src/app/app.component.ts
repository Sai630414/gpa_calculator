import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterOutlet, MenuComponent],
  template: `
    <ion-app>
      <app-menu></app-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {}
