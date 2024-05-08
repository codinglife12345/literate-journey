import { Component } from '@angular/core';
import { Todo } from '../../class';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NoStandaloneApp';
  todos:Todo[];
  localItem:string;
  constructor(){
  
  this.todos = [{sno: 1,
    karma: "killing",
    desc:"knife",
    active: true
  },{sno: 2,
    karma: "murder 2",
    desc:"drowning",
    active: true}];   
  

  }
  addtodo(todo:Todo){
      this.todos.push(todo)
      console.log(todo);
 }
  deletetodo(todo:Todo){
    const serial = this.todos.indexOf(todo);
    this.todos.splice(serial,1)
  }
  toggling(todo:Todo){
    const serial = this.todos.indexOf(todo);
    this.todos[serial].active = !this.todos[serial].active
    console.log("hello")
  }
}
