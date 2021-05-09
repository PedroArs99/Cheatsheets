import {Component, Input, OnInit} from '@angular/core';
import {EventEmitter, Output} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../Services/todo.service';
import {log} from 'util';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})

export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  // Set dinamic Classes
  setClasses() {
    return {
      todo : true, // Apply class todo
      'is-completed' : this.todo.completed // Apply class is-completeded, goes in commas because of the -
    };
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
