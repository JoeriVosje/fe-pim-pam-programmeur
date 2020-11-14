import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sessies-item',
  templateUrl: './sessies-item.component.html',
  styleUrls: ['./sessies-item.component.css']
})
export class SessiesItemComponent implements OnInit {

  @Input() public name: string;
  @Input() public studentsFinished: number; //nog aanpassen voor progressbar en getallen ervoor
  @Input() public studentsTotal: number;
  public progressString: string;
  public progress: number;
  @Input() public timeStarted: string;
  @Input() public timeFinished: string;
  @Input() public background: string;


  constructor() {
    this.progress = this.studentsFinished / this.studentsTotal;
    this.progressString = this.studentsFinished + " / " + this.studentsTotal;
   }

  ngOnInit(): void {
  }

}
