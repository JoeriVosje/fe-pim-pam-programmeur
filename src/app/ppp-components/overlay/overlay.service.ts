import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';

import { OverlayRefComponent } from './overlayRef.component';

interface OverlayDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
  }

@Injectable({ providedIn: 'root' })
export class OverlayService {

  constructor(private overlay: Overlay) { }

  open(componentType: ComponentType<unknown>, config: OverlayDialogConfig = {}) {

    const dialogConfig = config;

    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new OverlayRefComponent(overlayRef);

    const overlayPortal = new ComponentPortal(componentType);

    overlayRef.attach(overlayPortal);

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
