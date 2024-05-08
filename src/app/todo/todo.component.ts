import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../../../class'; // Make sure to import Todo class correctly


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'], // Use 'styleUrls' instead of 'styleUrl'
})
export class TodoComponent {

  @Input() todo:Todo
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();
  cause(todo:Todo){

     this.delete.emit(todo)
     console.log("hi")
  }
  oncheckbox(todo:Todo){
     this.toggle.emit(todo)
  }
}


