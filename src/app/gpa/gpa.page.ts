import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
  IonButton, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption,
  IonLabel, IonFooter, IonMenuButton, IonCard, IonCardContent
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gpa',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonButton, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption,
    IonLabel, IonFooter, IonMenuButton, IonCard, IonCardContent,
    FormsModule, NgFor, NgIf
  ],
  templateUrl: './gpa.page.html',
  styleUrls: ['./gpa.page.scss']
})
export class GpaPage {
  gradePoints: Record<string, number> = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0
  };

  grades = Object.keys(this.gradePoints);
  creditOptions = [1, 1.5, 2, 3, 4, 5, 20];

  subjects: { grade: string; credit: number }[] = [
    { grade: '', credit: 0 },
    { grade: '', credit: 0 },
    { grade: '', credit: 0 },
    { grade: '', credit: 0 },
    { grade: '', credit: 0 }
  ];

  gpa: number | null = null;

  addSubject() {
    this.subjects.push({ grade: '', credit: 0 });
  }

  calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const subj of this.subjects) {
      if (subj.grade && subj.credit) {
        totalPoints += this.gradePoints[subj.grade] * subj.credit;
        totalCredits += subj.credit;
      }
    }

    this.gpa = totalCredits === 0 ? null : totalPoints / totalCredits;
  }
}
