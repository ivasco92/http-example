enum TodoAttributes {
  id = 'id',
  title = 'title',
  completed = 'completed',
  userId = 'userId'
}

export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  static fromJson(toDoJson: any): Todo {
    const todo = new Todo();
    todo.id = toDoJson[TodoAttributes.id];
    todo.userId = toDoJson[TodoAttributes.userId];
    todo.title = toDoJson[TodoAttributes.title];
    todo.completed = toDoJson[TodoAttributes.completed];
    return todo;
  }
}
