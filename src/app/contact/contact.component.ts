import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  _value!: number

  getValue(value: string) {
    this._value = Number(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
