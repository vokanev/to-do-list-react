import { ITodo } from "../data/ITodo";
import { Reducer } from "react";

type State = {
  todos: ITodo[];
};

export type Action = {
  type: ActionKind;
  payload?: ITodo;
  payloads?: ITodo[];
};

export enum ActionKind {
  set = "set",
  add = "add",
  toggle = "toggle",
  remove = "remove",
  removeAll = "removeAll",
}

export const initialState: State = {
  todos: [],
};

export const TodoReducer: Reducer<typeof initialState, Action> = (
  state: State,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case ActionKind.set:
      console.log("set");
      if (action.payloads) return { ...state, todos: action.payloads };
      return state;

    case ActionKind.add:
      if (action.payload)
        return { ...state, todos: [...state.todos, action.payload] };
      return state;

    case ActionKind.toggle:
      console.log("toggle called");
      if (!action.payload) return state;
      return {
        ...state,
        todos: [
          ...state.todos.map((todo: ITodo) =>
            todo.id === action.payload?.id ? action.payload : { ...todo }
          ),
        ],
      };

    case ActionKind.remove:
      if (!action.payload) return state;
      return {
        ...state,
        todos: state.todos.filter(
          (todo: ITodo) => todo.id !== action.payload?.id
        ),
      };

    case ActionKind.removeAll:
      return { ...state, todos: [] };

    default:
      return state;
  }
};
