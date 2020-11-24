import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Screen } from './models/screen.model';

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

  public toScreens(lastAnwseredScreen : Screen ): void {
    this.internal(`${StudentModulesNavigation.SCHERMEN}/${lastAnwseredScreen == null ? '' : lastAnwseredScreen.id}`);
  }
}
