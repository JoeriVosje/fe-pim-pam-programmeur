import { Component , Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from '../../../ppp-components/three-dot-button/menu-item.model';
import { AdminScreensService } from '../../admin-screens.service';
import { OrderListItem, Screen } from '../scherm-item/scherm-item.model';

@Component({
  selector: 'scherm-overzicht-wrapper',
  templateUrl: './scherm-overzicht.wrapper.component.html',
  styleUrls: ['./scherm-overzicht.wrapper.component.css']
})
export class SchermOverzichtWrapperComponent implements OnInit, OnDestroy {


  moduleId: string;
  public screens: Screen[] = [];
  private readonly subscription: Subscription = new Subscription();

  @Input()
  public moduleName: string;

  constructor(private service: AdminScreensService,
              private router: Router,
              private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.moduleId = this.route.snapshot.paramMap.get('id');
    this.getScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reOrderScreens(screens: Screen[]): void{
    const orderedList: Array<string> = [];
    screens.map(screen => { orderedList.push(screen.id); });
    console.log(orderedList);
    this.service.reOrderScreen({componentIds: orderedList}).subscribe({
      next: e => console.log(e),
      error: error => console.log(error),
      complete: () => this.router.navigate([`modules/${this.moduleId}/screens`])
    });
  }

  toevoegen(): void {
    this.router.navigate([`modules/${this.moduleId}/screens/create`]);
  }

  verwijderen(menuItem: MenuItem): void {
    this.service.deleteScreen(menuItem.routeOrID).subscribe({
      error: error => console.log(error),
      complete: () =>  this.router.navigate([`modules/${this.moduleId}/screens`])
    });
  }

  public getScreens(): void {

    this.subscription.add(
      this.service.getScreens(this.moduleId)
        .subscribe({
          next: screens => this.screens = screens,
          error: error => console.log(error),
          complete: () => console.log('Schermen opgehaald.')
        })
    );
  }
}
