import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ppp-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

@Input() public iconurl: string;
@Input() public iconmessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log("url is: " + this.iconurl + "message is: " + this.iconmessage)
  }

}
