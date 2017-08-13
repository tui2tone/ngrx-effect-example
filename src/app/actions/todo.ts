import { Action } from '@ngrx/store';

export const ADD = 'ADD TODO';
export const REMOVE = 'REMOVE TODO';
export const DONE = 'DONE TODO';

export class AddTodo implements Action {
  readonly type = ADD;

  constructor(public text: string) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE;

  constructor(public index: number) {}
}

export class DoneTodo implements Action {
  readonly type = DONE;

  constructor(public index: number) {}
}

export type Actions =
  | AddTodo
  | RemoveTodo
  | DoneTodo;
