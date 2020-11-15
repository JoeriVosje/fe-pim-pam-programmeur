import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StudentModulesNavigation {
  public static START = '';
  public static SCHERMEN = 'scherm';


  public constructor(private readonly router: Router) { }

  public internal(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  public naarStart(): void {
    this.internal(StudentModulesNavigation.START);
  }

  public naarSchermen(): void {
    this.internal(StudentModulesNavigation.SCHERMEN);
  }
}
