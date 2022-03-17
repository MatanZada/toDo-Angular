import { Component, OnInit, Input } from '@angular/core';
import { NbButtonComponent } from '@nebular/theme';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  deleteTodo(id: string) {
    this.service.deleteThisTodo(id);
  }
  editBtnClicked() {
    if (!this.isEdit) {
      this.isEdit = !this.isEdit;
      this.btnStatus = 'Save';
    }
  }
  saveBtn(
    _id: string,
    text: HTMLInputElement,
    date: HTMLInputElement,
    isDone: HTMLInputElement
  ) {
    this.service.updateTodo(_id, text.value, date.value, isDone.value);
    this.isEdit = !this.isEdit;
    this.btnStatus = 'Edit';
  }
  @Input() btnStatus = 'Edit';
  @Input() isEdit = false;
  @Input() _id: string = '';
  @Input() Text: string = '';
  @Input() Date: Date = new Date();
  @Input() isDone: boolean = false;
  constructor(private service: TodoService) {}
}
