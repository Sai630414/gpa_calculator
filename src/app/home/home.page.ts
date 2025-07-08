import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonRow,
  IonButton,
  IonGrid,
  IonCol,
  IonFooter,
  IonMenuButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonFooter,
    IonIcon,
    IonCol,
    IonGrid,
    IonButton,
    IonRow,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    RouterModule,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // You can add logic here if needed
}
