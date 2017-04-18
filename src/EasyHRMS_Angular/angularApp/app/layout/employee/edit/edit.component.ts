import { Component, OnInit } from '@angular/core';

import { PersonalformComponent } from './personalform/personalform.component';
import { ContactformComponent } from './contactform/contactform.component';
import { BankformComponent } from './bankform/bankform.component';
import { ExperienceformComponent } from './experienceform/experienceform.component';
import { SalaryformComponent } from './salaryform/salaryform.component';
import { LeaveformComponent } from './leaveform/leaveform.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   }

}
