import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromTodo from './todo';
import { StoreModule } from '@ngrx/store';

export interface State {
  todo: fromTodo.State;
}

export const reducers = {
  todo: fromTodo.reducer
};

export const getAppTodo = (state: State) => state.todo;

export const getTodos = createSelector(
  getAppTodo,
  (state: fromTodo.State) => {
    return state.todos;
  }
);

export const getTotalTodo = createSelector(
  getAppTodo,
  (state: fromTodo.State) => {
    return state.total;
  }
);