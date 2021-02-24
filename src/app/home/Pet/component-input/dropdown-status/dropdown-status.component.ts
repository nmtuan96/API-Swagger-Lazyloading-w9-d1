import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown-status',
  templateUrl: './dropdown-status.component.html',
  styleUrls: ['./dropdown-status.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownStatusComponent),
      multi: true
    },
  ]
})
export class DropdownStatusComponent implements OnInit, ControlValueAccessor {

  listStatus = ["available", "pending", "sold"];
  onChange: (data : any) => void;
  onTouched: () => void;
  disable: boolean;
  private status: 'available' | 'pending' | 'sold';

  constructor() { }
  isSelect(statusIndex: number): boolean {
    return !this.status ? false : (this.listStatus[statusIndex] === this.status);
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.status = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange= fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  handleOnStatusChange(e) {
    const statusId = parseInt(e.target.value);
    const statusSelect = this.listStatus.find(status => status === this.listStatus[statusId]);
    this.writeValue(statusSelect);
    this.onChange(statusSelect);
  }
}
