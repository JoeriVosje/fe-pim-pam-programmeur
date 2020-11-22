import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import {Observable, of} from 'rxjs';

import { ErrorOverlayComponent } from '../../../ppp-components/error-overlay/error-overlay.component';
import { ModalComponent } from '../../../ppp-components/modal/modal.component';
import { OverlayService } from '../../../ppp-components/overlay/overlay.service';
import { OverlayRefComponent } from '../../../ppp-components/overlay/overlayRef.component';
import { SkipOverlayComponent } from '../../../ppp-components/skip-overlay/skip-overlay.component';
import { SuccesOverlayComponent } from '../../../ppp-components/succes-overlay/succes-overlay.component';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';

@Injectable({providedIn: 'root'})
export class SchermenQuestionService {

  constructor(
    private readonly modal: MatDialog,
    private readonly overlayService: OverlayService,
    private readonly formBuilder: FormBuilder
  ) { }

  public openOnSkipModal(): MatDialogRef<ModalComponent> {
    return this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Deze actie kun je niet terugdraaien.',
        buttonText1: 'Overslaan',
        buttonText2: 'Annuleren'
      }
    });
  }

  public openFeedbackModal(feedback: string): MatDialogRef<FeedbackModalComponent> {
    return this.modal.open(FeedbackModalComponent, {
      width: '368px',
      data: {
        title: 'Je hebt een vraag overgeslagen.',
        text: feedback,
        buttonText: 'OK'
      },
      panelClass: 'modal-padding'
    });
  }

  public openOverlay(overlay: string): Observable<boolean> {
    let modal: OverlayRefComponent;
    if (overlay === 'success') {
      modal = this.overlayService.open(SuccesOverlayComponent);
    } else if (overlay === 'error') {
      modal = this.overlayService.open(ErrorOverlayComponent);
    } else {
      modal = this.overlayService.open(SkipOverlayComponent);
    }
    return new Observable((observer) => {
      setTimeout(() => {
        modal.close();
        observer.next(true);
      }, 1000);
    });
  }

  public initializeForm(): FormGroup {
    return this.formBuilder.group({
      options: ['', Validators.required]
    });
  }
}
