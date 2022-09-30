import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  arr:{Name:string, Age:number}[]= []
  getData(data:any){
    this.arr = data
    console.log(this.arr)
  }
}
