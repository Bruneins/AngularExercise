import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() customImput: any;
  @Output() value: any

  // value: string;
  constructor() { }

  ngOnInit(): void {
  }

}
