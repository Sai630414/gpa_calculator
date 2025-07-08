import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonLabel,
    IonButton,
    IonCard,
    IonCardContent,
    IonButtons,
    IonMenuButton
  ]
})
export class AttendancePage {
  attended: number | null = null;
  total: number | null = null;
  result = '';

  calculate() {
    const a = this.attended ?? 0;
    const t = this.total ?? 0;

    if (a < 0 || t <= 0 || a > t) {
      this.result = '⚠️ Enter valid values. Attended should be ≤ total.';
      return;
    }

    const percent = (a / t) * 100;
    let message = `🎯 Current Attendance: ${percent.toFixed(2)}%`;

    if (percent < 75) {
      const more75 = Math.ceil((0.75 * t - a) / (1 - 0.75));
      message += `<br>📌 Attend ${more75} more to reach 75%.`;
    }

    if (percent < 80) {
      const more80 = Math.ceil((0.80 * t - a) / (1 - 0.80));
      message += `<br>📌 Attend ${more80} more to reach 80%.`;
    }

    if (percent >= 80) {
      const skip75 = Math.floor((a - 0.75 * t) / 0.75);
      const skip80 = Math.floor((a - 0.80 * t) / 0.80);
      message += `<br>✅ You can bunk ${skip80} classes (80%) or ${skip75} (75%).`;
    }

    this.result = message;
  }
}
