import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input id:

  // [id]="item.fieldId" [placeholder]="item.label" [type]="item.type" [maxLength]="item.maxLength" [minLength]="item.minLength" [required]="item.required"

  constructor() { }

  ngOnInit(): void {
  }

}
