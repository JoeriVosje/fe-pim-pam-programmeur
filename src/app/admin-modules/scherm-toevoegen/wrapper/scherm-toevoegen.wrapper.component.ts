import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminScreensService } from '../../admin-screens.service';
import { Screen } from '../../schermen-overzicht/scherm-item/scherm-item.model';
import {PppSnackerService} from '../../../ppp-services/ppp-snacker.service';

@Component({
  selector: 'scherm-toevoegen-wrapper',
  templateUrl: './scherm-toevoegen.wrapper.component.html',
  styleUrls: ['./scherm-toevoegen.wrapper.component.css']
})
export class SchermToevoegenWrapperComponent implements OnInit {

  constructor(private service: AdminScreensService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: PppSnackerService) {}

  moduleId: string;

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.paramMap.get('id');
  }

  addScreen(screen: Screen): void{
    this.service.saveScreen(screen).subscribe({
      error: error => this.snackBar.showErGingIetsMis(error),
      complete: () => {
        this.snackBar.showToegevoegd('Scherm');
        this.router.navigate([`/modules/${this.moduleId}/screens`]);
      }
    });
  }

  showAlert($event: string): void {
    this.snackBar.showError($event);
  }
}
