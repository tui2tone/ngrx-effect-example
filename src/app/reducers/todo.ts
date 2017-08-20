import * as Action from '../actions/todo';

interface Todo {
  text: string;
  status: string;
}

export interface State {
  userId: number;
  isLoading: boolean;
  isLoadSuccess: boolean;
  todos: Array<Todo>;
}

export const initialState: State = {
  userId: 10,
  isLoading: false,
  isLoadSuccess: false,
  todos: []
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.GET_TODO: {
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        todos: []
      };
    }

    case Action.GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: true,
        todos: action.payload.data
      };
    }

    case Action.GET_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: false,
        todos: []
      };
    }

    default: {
      return state;
    }
  }
}
