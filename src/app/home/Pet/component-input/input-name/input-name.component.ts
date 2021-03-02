import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> InputNameComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputNameComponent),
      multi: true
    }
  ]
})
export class InputNameComponent implements OnInit, ControlValueAccessor,Validator  {

 
  public name = new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]);
  onTouched: ()=> void;
  disabled: boolean;

  constructor() { }

  writeValue(val) {
    this.name.setValue(val);
  }

  registerOnChange(fn) {
    this.name.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  ngOnInit(): void {
  }
  
  validate(c: AbstractControl): ValidationErrors | null{
    return this.name.valid ? null : { invalidForm: {valid: false}};
  }
  
}
