import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }

}
