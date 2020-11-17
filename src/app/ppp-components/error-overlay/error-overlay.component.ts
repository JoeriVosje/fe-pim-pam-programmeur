import { Component, Injectable, OnInit } from '@angular/core';

import { OverlayRefComponent } from 'src/app/ppp-components/overlay/overlayRef.component';
import { OverlayService } from 'src/app/ppp-components/overlay/overlay.service';


@Injectable({providedIn: "root"})
@Component({
  selector: 'ppp-error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.css']
})
export class ErrorOverlayComponent implements OnInit {

  public iconurl: "assets/error_icon.png";
  public iconmessage: "Helaas...";

  constructor(private overlay: OverlayService) { }

  ngOnInit(): void {
  }

  showOverlay() {
    let dialogRef: OverlayRefComponent = this.overlay.open();
    setTimeout(() => { dialogRef.close();}, 5000); // autoclose after 5 seconds
  }
}
