import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonInput,
  IonLabel,
  IonCard,
  IonCardContent,
  IonMenuButton,
  IonItem
} from '@ionic/angular/standalone';

import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cgpa',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonInput,
    IonLabel,
    IonCard,
    IonCardContent,
    IonMenuButton,
    IonItem,
    NgFor,
    NgIf,
    FormsModule,
  ],
  templateUrl: './cgpa.page.html',
  styleUrls: ['./cgpa.page.scss'],
})
export class CgpaPage {
  gradePoints: Record<string, number> = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0,
  };

  grades = Object.keys(this.gradePoints);
  credits = [1, 1.5, 2, 3, 4, 5, 20];
  inputs: Record<string, number> = {};
  result: number | null = null;
  studentName: string = '';

  calculateCGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    this.credits.forEach((credit) => {
      this.grades.forEach((grade) => {
        const key = `c${credit}_g${grade}`;
        const count = this.inputs[key] || 0;
        totalPoints += count * credit * this.gradePoints[grade];
        totalCredits += count * credit;
      });
    });

    this.result = totalCredits === 0 ? null : totalPoints / totalCredits;
  }

  saveCGPA() {
    if (!this.studentName || this.result === null) {
      alert('Please enter your name and calculate CGPA first.');
      return;
    }

    const existingData = JSON.parse(localStorage.getItem('cgpaUsers') || '[]');

    const newEntry = {
      name: this.studentName,
      cgpa: this.result,
      inputs: this.inputs,
      timestamp: new Date().toISOString(),
    };

    existingData.push(newEntry);
    localStorage.setItem('cgpaUsers', JSON.stringify(existingData));

    alert('✅ Saved successfully!');
    this.studentName = '';
  }
}
