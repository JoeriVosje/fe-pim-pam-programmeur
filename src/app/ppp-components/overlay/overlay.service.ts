import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { OverlayComponent} from './overlay.component';
import { OverlayRefComponent } from './overlayRef.component'

interface OverlayDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
  }
  
@Injectable()
export class OverlayService {

  constructor(private overlay: Overlay) { }

  open(config: OverlayDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = config;

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new OverlayRefComponent(overlayRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const overlayPortal = new ComponentPortal(OverlayComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(overlayPortal);

    // NOG DOEN: fixen dat ie sluit waar je ook klikt
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());   

    return dialogRef;
  }

  private createOverlay(config: OverlayDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: OverlayDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'backdrop',
      panelClass: 'default-overlay',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

}