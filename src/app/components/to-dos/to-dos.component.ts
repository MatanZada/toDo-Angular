import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent {
  filterSearch: string = '';
  toDos: Todo[] = [];

  constructor(service: TodoService) {
    this.toDos = service.getTodos();
  }
}
