import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminKlassenService } from '../../admin-klassen.service';
import { KlasRequest } from '../../klassen-request.model';

@Component({
  selector: 'klassen-toevoegen-wrapper',
  templateUrl: './klassen-toevoegen.wrapper.component.html',
  styleUrls: ['./klassen-toevoegen.wrapper.component.css']
})
export class KlassenToevoegenWrapperComponent implements OnInit {

  constructor(private service: AdminKlassenService, private router: Router) { }

  ngOnInit(): void {
  }

  addKlas(klas: KlasRequest){
    // this.service.saveKlas().subscribe({
    //   next: e => console.log(e),
    //   error: error => console.log(error),
    //   complete: () => this.router.navigate(['/modules'])
    // })
  } 

}
