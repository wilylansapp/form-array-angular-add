import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = new FormGroup({
      datesPhase: new FormArray([]),
    });

    this.orderForm.valueChanges.subscribe((value) => console.log(value));
    this.addItem();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      opex: ['', Validators.required],
      rco: ['', Validators.required],
      pomtn2: ['', Validators.required],
      poiaenu: ['', Validators.required],
      pomtn3: ['', Validators.required],
      mcf: ['', Validators.required],
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('datesPhase') as FormArray;
    this.items.push(this.createItem());
  }
}
