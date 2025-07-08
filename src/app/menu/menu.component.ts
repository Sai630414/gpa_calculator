import { Component } from '@angular/core';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    RouterModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'CGPA Calculator', url: '/cgpa', icon: 'calculator' },
    { title: 'GPA Calculator', url: '/gpa', icon: 'school' },
    { title: 'Attendance Calculator', url: '/attendance', icon: 'calendar' },
     { title: 'Users', url: '/users', icon: 'people' },
    {
      title: 'Source Code',
      url: 'https://github.com/Sai630414/gpa-calculator',
      icon: 'logo-github',
      external: true,
    },
  ];
}
