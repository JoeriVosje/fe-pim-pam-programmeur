import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sessies-item',
  templateUrl: './sessies-item.component.html',
  styleUrls: ['./sessies-item.component.css']
})
export class SessiesItemComponent implements OnInit {

  @Input() public name: string;
  @Input() public studentsFinished: string;
  @Input() public studentsTotal: string;
  public progressString: string;
  public progress: number;
  @Input() public timeStarted: string;
  @Input() public timeFinished: string;
  @Input() public background: string;
  @Input() hasVerticalScrollbar: boolean;


  constructor() { }

  ngOnInit(): void {
    const finished = Number(this.studentsFinished);
    const total = Number(this.studentsTotal);
    this.progress = finished / total * 100;
    this.progressString = this.studentsFinished + ' / ' + this.studentsTotal;
  }

}
