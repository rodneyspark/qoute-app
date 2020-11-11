export class Qoute {
 showDescription: boolean ;

  constructor(public id:number, public type: string,  public qoute: string, public authour: string, public submitted, public completeDate: Date){
this.showDescription = false;
  }
}
