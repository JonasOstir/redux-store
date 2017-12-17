export const ADD_TODO = '[TODO] Add Todo';
export const DELETE_TODO = '[TODO] Delete Todo';

export class AddTodo {
  readonly type = ADD_TODO;

  constructor(private payload: any) {}

}

export class DeleteTodo {
  readonly type = DELETE_TODO;

  constructor(private payload: any) {}
}
