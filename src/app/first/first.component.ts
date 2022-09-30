import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name ="";
  age=0
  arr:{Name:string, Age:number}[]= []
  @Output() myEvent = new EventEmitter();

  Add(){
    let data = {Name:this.name, Age:this.age}
    if(this.age>20 && this.age<40)
    {
      this.arr.push(data)
      this.myEvent.emit(this.arr);
    }
  }

}
