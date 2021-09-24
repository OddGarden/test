import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ValidationMessagesComponent } from '../validation/validation-messages.component';

@Component({
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {


  srfFormGroup!: FormGroup;
  emailMessage = " ";
  validationMessage = new ValidationMessagesComponent();

  minDate: Date;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

  }

  ngOnInit() {



    this.srfFormGroup = this.fb.group({
      ntCredentials: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      desiredCompletionDate: ['', Validators.required],
      requestType: ['', Validators.required],
      priorityGroup:'',
      roleGroup: '',
      impactGroup: ['', Validators.required],
      patientImpact: '',
      projectTitle: ['', Validators.required],
      projectDescription: ['', Validators.required],
      stakeholders: '',
      fileUpload: ''
    })

    const emailControl = this.srfFormGroup.get('email');
    emailControl?.valueChanges.subscribe(
      value => this.setMessage(emailControl)
    );

  }
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map (
        key => this.validationMessage.getMessages(key)).join(' ');
    }
  }


}
