import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules-bewerken',
  templateUrl: './modules-bewerken.component.html',
  styleUrls: ['./modules-bewerken.component.css']
})
export class ModulesBewerkenComponent implements OnInit {

  public id: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
  }

}
