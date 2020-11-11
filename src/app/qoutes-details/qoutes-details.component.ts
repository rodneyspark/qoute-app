import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoutes-details',
  templateUrl: './qoutes-details.component.html',
  styleUrls: ['./qoutes-details.component.css']
})
export class QoutesDetailsComponent implements OnInit {
  @Input() qoute: Qoute;
  @Output() isComplete = new EventEmitter<boolean>();

  qouteDelete(complete: boolean){
    this.isComplete.emit(complete);

  }
  numberofupvotes:number=0
  upvote(){
    this.numberofupvotes ++;
  }
   numberofdownvotes:number=0
  downvote(){
    this.numberofdownvotes ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
