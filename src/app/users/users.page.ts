import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonAvatar,
    IonButtons,
    IonBackButton
  ],
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
})
export class UsersPage {
  users: string[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    const allKeys = Object.keys(localStorage);
    this.users = allKeys.filter(k => k.startsWith('cgpa_')).map(k => k.replace('cgpa_', ''));
  }

  openUser(name: string) {
    this.router.navigate(['/cgpa-user', name]);
  }
}
