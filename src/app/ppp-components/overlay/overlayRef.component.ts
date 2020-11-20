import { OverlayRef } from '@angular/cdk/overlay';

export class OverlayRefComponent {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
