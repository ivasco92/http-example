import { Component } from '@angular/core';
import {TodosService} from './todos.service';
import {Todo} from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  selectedTodo: Todo;

  constructor(private todosService: TodosService) {
    const successHandler = (response) => {
      this.todos = response;
    }
    const errorHandler = (error) => {
      console.log(error);
    }
    this.todosService.getTodos()
      .pipe()
      .subscribe(successHandler, errorHandler);
  }
  todoWasSelected(todo: Todo) {
    this.todosService.getTodoById(todo.id)
      .subscribe(todoDetail => {
        this.selectedTodo = todoDetail;
      });
  }
}
