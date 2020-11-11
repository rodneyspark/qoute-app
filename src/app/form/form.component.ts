import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Qoute } from '../qoute';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQoute = new Qoute( 1 , "" , "" , "" , "" , new Date());
@Output() addQoute = new EventEmitter<Qoute>();

  submitQoute(){
this.addQoute.emit(this.newQoute);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

