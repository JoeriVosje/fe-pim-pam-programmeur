import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { AdminScreensService } from '../admin-screens.service';
import { Screen } from './screens-overzicht/screen-item/screen-item.model';

@Component({
  selector: 'app-modules-screens',
  templateUrl: './modules-screens.component.html',
  styleUrls: ['./modules-screens.component.css']
})
export class ModulesScreensComponent implements OnInit, OnDestroy {

  public screens: Screen[] = [];
  public moduleId: string;

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminScreensService: AdminScreensService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // logging route id for demo purposes and usage in - to be made - 'edit module screen', delete when clear
    this.moduleId = this.route.snapshot.paramMap.get('id');
    this.getScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getScreens(): void {
    this.subscription.add(
      this.adminScreensService.getScreens()
        .subscribe({
          next: screens => this.screens = screens,
          error: error => console.log(error),
          complete: () => console.log('complete')
        })
    );
  }

  deleteScreen(menuItem: MenuItem): void {
    console.log('Delete screen id ' + menuItem.data);
    // todo Implement
  }

  toevoegen(): void {
    this.router.navigate(['modules/' + this.moduleId + '/screens/create']);
  }
}
