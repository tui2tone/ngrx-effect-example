import * as Action from '../actions/todo';

const STATUS = {
  NEW: 'new',
  DONE: 'done'
}

interface Todo {
  text: string;
  status: string;
}

export interface State {
  total: number;
  todos: Array<Todo>;
}

export const initialState: State = {
  total: 0,
  todos: []
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.ADD: {
      return {
        ...state,
        total: state.total + 1,
        todos: [
          ...state.todos,
          {
            text: action.text,
            status: STATUS.NEW
          }
        ]
      };
    }

    case Action.REMOVE: {
      return {
        ...state,
        total: state.total - 1,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      };
    }

    case Action.DONE: {
      const todo = {
        text: state.todos[action.index].text,
        status: STATUS.DONE
      }

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          todo,
          ...state.todos.slice(action.index + 1)
        ]
      };
    }

    default: {
      return state;
    }
  }
}
