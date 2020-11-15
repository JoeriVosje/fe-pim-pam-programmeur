import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StudentModulesNavigation {
  public static START = '';
  public static STUDENT = 'student';
  public static SCHERMEN = 'scherm';


  public constructor(private readonly router: Router) { }

  public internal(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  public toStart(): void {
    this.internal(StudentModulesNavigation.STUDENT);
  }

  public toScreens(): void {
    this.internal(StudentModulesNavigation.SCHERMEN);
  }
}
