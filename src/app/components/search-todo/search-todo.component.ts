import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/interfaces/todo';
@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css'],
})
export class SearchTodoComponent {
  addTodo(
    text: HTMLInputElement,
    date: HTMLInputElement,
    isDone: HTMLInputElement,
    id: HTMLInputElement
  ) {
    let todo = {
      _id: id.value,
      Text: text.value,
      Date: new Date(date.value),
      isDone: /true/i.test(isDone.value),
    } as Todo;
    this.service.addTodo(todo);
    id.value = text.value = isDone.value = date.value = '';
  }
  constructor(private service: TodoService) {}
}
