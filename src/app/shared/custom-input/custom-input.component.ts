import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() customInput: any;
  @Input() value: any;
  @Output() valChange = new EventEmitter<{value: string, fieldId:string}>();

  // value: string;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(val: any) {
    this.valChange.emit({value :val, fieldId :this.customInput.fieldId});
  }
}
