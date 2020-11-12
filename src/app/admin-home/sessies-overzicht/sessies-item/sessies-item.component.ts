import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sessies-item',
  templateUrl: './sessies-item.component.html',
  styleUrls: ['./sessies-item.component.css']
})
export class SessiesItemComponent implements OnInit {

  @Input() public name: string;
  @Input() public status: boolean;
  @Input() public progress: string; //nog aanpassen voor progressbar en getallen ervoor
  @Input() public dateStarted: string;
  @Input() public timeStarted: string;
  @Input() public timeFinished: string;
  @Input() public background: string;
  @Input() public sessieId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
