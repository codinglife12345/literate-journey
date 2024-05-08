import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Todo } from '../../../class'; 

@Component({
  selector: 'listner',
  templateUrl: './listner.component.html',
  styleUrls: ['./listner.component.css'], 
})
export class ListnerComponent {
  task = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  @Output() eventListener: EventEmitter<Todo> = new EventEmitter(); 
  @Input()  todo:Todo
  updateName() {
    this.task.setValue('Nancy');
  }

  onSubmit() {
    if (this.task.valid && this.description.valid){
    const todo: Todo = { 
      sno: 5,
      karma: this.task.value, 
      desc: this.description.value, 
      active: true
    };
    this.eventListener.emit(todo);
    console.log("success")
  }
   else{
    alert("dont be bastard")
   }
  }
}