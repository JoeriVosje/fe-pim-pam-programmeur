import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BreadCrumb } from './bread-crumb.model';

@Component({
  selector: 'ppp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public title: string;
  @Output()
  public logoutEmitter = new EventEmitter<void>();
  @Output()
  public breadCrumbEmitter = new EventEmitter<string>();
  @Input()
  icon: string;
  breadCrumbRoutes: BreadCrumb[];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  public logoutClicked(): void {
    this.logoutEmitter.emit();
    this.router.navigate(['/login']);
  }

  public breadCrumbClicked(route: string): void {
    this.breadCrumbEmitter.emit(route);
  }

  ngOnInit(): void {
    this.breadCrumbRoutes = this.route.snapshot.data.breadCrumbs;
  }

}
