import {Component, Input} from '@angular/core';
import {TodosService} from './todos.service';
import {Todo} from './model/todo';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = [];
  selectedTodo: Todo;
  loading = true;

  constructor(private todosService: TodosService) {
    const successHandler = (response) => {
      this.todos = response;
    }
    const errorHandler = (error) => {
      console.log(error);
    }
    this.todosService.getTodos()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(successHandler, errorHandler);
  }
  todoWasSelected(todo: Todo) {
    this.loading = true;
    this.todosService.getTodoById(todo.id)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(todoDetail => {
        this.selectedTodo = todoDetail;
      });
  }
}
