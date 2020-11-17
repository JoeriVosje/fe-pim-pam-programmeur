import { Component, Input, OnInit } from '@angular/core';
import { ErrorOverlayComponent } from 'src/app/ppp-components/error-overlay/error-overlay.component';
import { OverlayService } from 'src/app/ppp-components/overlay/overlay.service';
import { OverlayRefComponent } from 'src/app/ppp-components/overlay/overlayRef.component';

import { Sessie } from './sessies-item/sessies-item.model';

/**
 * Dit is een zogenoemd 'dom' component. Dit component
 * wordt alleen gebruikt voor het tonen van ontvangen data
 * in een ui. Daarnaast stuurt het gebruikers interactie
 * naar het 'slimme' component.
 */
@Component({
  selector: 'sessies-overzicht',
  templateUrl: './sessies-overzicht.component.html',
  styleUrls: ['./sessies-overzicht.component.css']
})
export class SessiesOverzichtComponent implements OnInit {

  @Input()
  public sessies: Sessie[];

  constructor(private overlay: OverlayService) {   }

  ngOnInit(): void {
  }

  showOverlay() {
    let dialogRef: OverlayRefComponent = this.overlay.open(ErrorOverlayComponent);
    setTimeout(() => { dialogRef.close();}, 5000); // autoclose after 5 seconds
  }


}
