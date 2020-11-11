import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
qoutes: Qoute[] = [
  new Qoute( 1 , 'inspiretional', 'the road to success is very narrow,you have to struggle', 'emanuel', '', new Date(2020, 6 , 19)),
  new Qoute( 2 , 'motivational', 'to save a tomorrow conserve a tree today', '', 'wangari mathai', new Date(2020, 6 , 19))
];
 
// like(index){
//   this.qoutes[index].like++;
// }

// unlike(index){
//   this.qoutes[index].upvote++;
// }
  addNewQoute(qoute){
    let qouteLength = this.qoutes.length;
    qoute.id = qouteLength+1;
    qoute.completeDate = new Date(qoute.completeDate);
    this.qoutes.push(qoute);
  }
toggleDetails(index){
  this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
}
deleteQoute(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].type}?`)

    if (toDelete){
      this.qoutes.splice(index, 1);
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
