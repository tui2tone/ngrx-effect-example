import { Action } from '@ngrx/store';

export const GET_TODO = '[Get] Todo';
export const GET_TODO_SUCCESS = '[Get] Todo Success';
export const GET_TODO_FAILED = '[Get] Todo Failed';

export class GetTodo implements Action {
  readonly type = GET_TODO;

  constructor() {}
}

export class GetTodoSuccess implements Action {
  readonly type = GET_TODO_SUCCESS;

  constructor(public payload: any) {}
}

export class GetTodoFailed implements Action {
  readonly type = GET_TODO_FAILED;

  constructor(public payload: any) {}
}

export type Actions =
  | GetTodo
  | GetTodoSuccess
  | GetTodoFailed;
