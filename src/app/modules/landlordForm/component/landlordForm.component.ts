import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { LandlordFormService } from '../services';




@Component({
  selector: 'app-landlord-form',
  templateUrl: './landlordForm.component.html',
  styleUrls: ['./landlordForm.component.scss']
})

export class LandlordFormComponent implements OnInit {
  form: FormGroup;
  private landLords = [];

  constructor(private fb: FormBuilder, private landlordFormService: LandlordFormService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
      properties: this.fb.array([this.initProperty ()])
    });
  }

  submitForm () {
      if (this.form.valid) {
      this.landLords.push(this.form.value);
      this.landlordFormService.postLandlord(this.form.value);
    }
  }

  initProperty () {
    return this.fb.group({
      property: ['', Validators.required],
    });
  }

  addProperty () {
    const control = <FormArray>this.form.controls['properties'];
    control.push(this.initProperty ());
  }

  removePropertie (i: number) {
    const control = <FormArray>this.form.controls['properties'];
    control.removeAt(i);
  }

}
