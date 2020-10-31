import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-three-point-button',
  templateUrl: './three-point-button.component.html',
  styleUrls: ['./three-point-button.component.css']
})
export class ThreePointButtonComponent implements OnInit {

  @Output()
  public buttonEventEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  public onClick(): void {
    this.buttonEventEmitter.emit();
  }



}
