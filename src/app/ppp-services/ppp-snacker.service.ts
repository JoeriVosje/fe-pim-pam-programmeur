import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PppSnackerService {

  constructor(private snackBar: MatSnackBar) {
  }

  showSuccess(message: string): void {
    this.showSnackbar(message, '🔥', ['snackbar']);
  }

  showError(message: string): void {
    this.showSnackbar(message, '✋', ['snackbar', 'error']);
  }

  showErGingIetsMis(errorObject?: object): void {
    this.showSnackbar('Er ging iets mis!', '👻', ['snackbar', 'error']);
    console.log(errorObject);
  }

  showToegevoegd(subject: string): void {
    this.showSnackbar(`${subject} toegevoegd!`, '🎉', ['snackbar']);
  }

  showVerwijderd(subject: string): void {
    this.showSnackbar(`${subject} verwijderd!`, '👻', ['snackbar']);
  }

  showBewerkt(subject: string): void {
    this.showSnackbar(`${subject} bewerkt!`, '✍️', ['snackbar']);
  }

  showAlleVeldenInvullen(): void {
    this.showSnackbar('Oeps, alle velden invullen aub!', '✋', ['snackbar', 'error']);
  }

  showSnackbar(message: string, smiley: string, styling: string[]): void {
    this.snackBar.open(message, smiley, {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: styling
    });
  }
}
