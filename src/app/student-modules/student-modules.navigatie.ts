import { Router } from '@angular/router';

export class StudentModulesNavigatie {
  public static START = '';
  public static SCHERMEN = 'scherm';


  public constructor(private readonly router: Router) { }

  public internal(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  public naarStart(): void {
    this.internal(StudentModulesNavigatie.START);
  }

  public naarSchermen(): void {
    this.internal(StudentModulesNavigatie.SCHERMEN);
  }
}
