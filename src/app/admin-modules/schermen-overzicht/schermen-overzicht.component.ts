import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Screen } from './scherm-item/scherm-item.model';
import { MenuItem } from '../../ppp-components/three-dot-button/menu-item.model';
import { AdminScreensService } from '../admin-screens.service';



@Component({
  selector: 'screens-overzicht',
  templateUrl: './schermen-overzicht.component.html',
  styleUrls: ['./schermen-overzicht.component.css']
})
export class SchermenOverzichtComponent implements OnInit, OnDestroy {

  @Input()
  public moduleName: string;

  @Output()
  public menuItemClicked: EventEmitter<MenuItem> = new EventEmitter();

  @Output()
  public toevoegenClicked: EventEmitter<void> = new EventEmitter();

  public screens: Screen[] = [];
  public moduleId: string;

  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly adminScreensService: AdminScreensService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // logging route id for demo purposes and usage in - to be made - 'edit module screen', delete when clear
    this.moduleId = this.route.snapshot.paramMap.get('id');
    this.getScreens();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  drop(event: CdkDragDrop<Screen[]>): void {
    moveItemInArray(this.screens, event.previousIndex, event.currentIndex);
    this.screens = [...this.screens];
  }

  public menuItem(menuItem: MenuItem): void {
    this.menuItemClicked.emit(menuItem);
  }

  toevoegen(): void {
      this.toevoegenClicked.emit();
  }


  public getScreens(): void {
    this.subscription.add(
      this.adminScreensService.getScreens(this.moduleId)
        .subscribe({
          next: screens => this.screens = screens,
          error: error => console.log(error),
          complete: () => console.log('complete')
        })
    );
  }

  deleteScreen(menuItem: MenuItem): void {
    console.log('Delete screen id ' + menuItem.routeOrID);
    // todo implement snackbar, loading and delete
  }
}
