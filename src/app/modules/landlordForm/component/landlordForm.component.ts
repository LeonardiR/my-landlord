import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {LandlordService} from '../../../core/landlordService';



@Component({
  selector: 'app-landlord-form',
  templateUrl: './landlordForm.component.html',
  styleUrls: ['./landlordForm.component.scss']
})

export class LandlordFormComponent implements OnInit {
  form: FormGroup;
  private landLords = [];

  constructor(private fb: FormBuilder, private landlordService: LandlordService) {
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
      rate: ['', Validators.required],
      properties: this.fb.array([this.initProperty ()])
    });
  }

  submitForm (id: number) {
      if (this.form.valid) {
      this.landLords.push(this.form.value);
      this.landlordService.postLandlord(this.form.value, id);
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
