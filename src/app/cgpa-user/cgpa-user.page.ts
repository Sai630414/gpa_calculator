import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-cgpa-user',
  standalone: true,
  imports: [
    CommonModule, // ✅ Required for pipes like "number"
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
  templateUrl: './cgpa-user.page.html',
  styleUrls: ['./cgpa-user.page.scss'],
})
export class CgpaUserPage {
  userName: string = '';
  savedData: { grades: string[]; credits: number[] } | null = null;

  constructor(private route: ActivatedRoute) {
    this.userName = this.route.snapshot.paramMap.get('name') || '';
    const rawData = localStorage.getItem(`cgpa_${this.userName}`);
    if (rawData) {
      this.savedData = JSON.parse(rawData);
    }
  }

  calculateCGPA(): number {
    if (!this.savedData) return 0;
    const gradePoints: any = { S: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };
    let totalPoints = 0;
    let totalCredits = 0;

    this.savedData.grades.forEach((grade, i) => {
      const credit = this.savedData!.credits[i];
      totalPoints += gradePoints[grade] * credit;
      totalCredits += credit;
    });

    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  }
}
