import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminKlassenService } from '../admin-klassen.service';
import { AdminStudentenService } from '../admin-studenten-service.service';
import { StudentRequest } from '../studenten-request.model';

@Component({
  selector: 'klassen-studenten-toevoegen',
  templateUrl: './klassen-studenten-toevoegen.component.html',
  styleUrls: ['./klassen-studenten-toevoegen.component.css']
})
export class KlassenStudentenToevoegenComponent implements OnInit {
  @Output()
  public addStudent: EventEmitter<StudentRequest> = new EventEmitter();

  @Input()
  public modules: any[];
  public klasNaam: string;
  private student: StudentRequest = {
    email: null,
    firstName: null,
    lastName: null,
    classroomId: null,
    role: 0,
  };

  @Input()
  loading: boolean;

  constructor(private router: Router,
              private studentenService: AdminStudentenService,
              private adminKlassenService: AdminKlassenService,
              private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.student.classroomId = this.route.snapshot.paramMap.get('id');
    this.klasNaam = await this.adminKlassenService.getKlas(this.student.classroomId).toPromise().then(value => value.name);
  }

  public getNameValue(value: string): void {
    this.student.firstName = value?.length === 0 ? null : value;
  }

  public getLastNameValue(value: string): void {
    this.student.lastName = value?.length === 0 ? null : value;
  }

  public getEmailValue(value: string): void {
    this.student.email = value?.length === 0 ? null : value;
  }

  public add(): void {
    this.addStudent.emit(this.student);
  }

  getTitle(): string {
    return (this.klasNaam == null ? '' : this.klasNaam + ' - ') + 'Studenten Toevoegen';
  }

}
