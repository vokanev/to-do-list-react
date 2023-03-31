import React from "react";
import { Action } from "./reducer";

export interface IContext {
  dispatch: React.Dispatch<Action>;
}

export const Context = React.createContext<IContext | null>(null);
