import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Injectable({providedIn: 'root'})
export class SchermenGuard implements CanActivate {
  constructor(
    private readonly studenModulesService: StudentModulesService,
    private readonly studentModulesNavigation: StudentModulesNavigation) { }

  public canActivate(): boolean {
    const moduleIdIsEmpty = this.studenModulesService.getModuleId() === undefined;
    const sessionIdIsEmpty = this.studenModulesService.getSessionId() === undefined;
    if (moduleIdIsEmpty || sessionIdIsEmpty) {
      this.studentModulesNavigation.toStart();
    }
    return !moduleIdIsEmpty || !sessionIdIsEmpty;
  }
}
