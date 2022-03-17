import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private toDos: Todo[];
  getToDos(): Todo[] {
    return this.toDos;
  }
  addTodo(todo: Todo) {
    this.toDos.push(todo);
  }
  deleteThisTodo(id: string) {
    let findTodo = this.toDos.findIndex((element) => element._id === id);
    this.toDos.splice(findTodo, 1);
  }
  updateTodo(id: string, text: string, date: string, isDone: string) {
    let updatedTodo = this.toDos.find((todo) => todo._id === id);
    if (updatedTodo) {
      updatedTodo.Text = text;
      updatedTodo.Date = new Date(date);
      updatedTodo.isDone = /true/i.test(isDone);
    }
  }
  constructor() {
    this.toDos = [
      {
        _id: '1',
        Text: 'Do HW',
        Date: new Date(),
        isDone: false,
      },
      {
        _id: '2',
        Text: 'Do HW1',
        Date: new Date(),
        isDone: false,
      },
    ];
  }
  getTodos(): Todo[] {
    return this.toDos;
  }
}
