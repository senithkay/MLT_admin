import { ACTION_TYPES } from "@/utils/enums";
import { combineReducers } from "redux";

class ActionPayload {
  description: string;
  extra: string;

  constructor(description: string, extra: string) {
    this.description = description;
    this.extra = extra;
  }
}

class Action {
  type: string;
  payload: ActionPayload;

  constructor(type: string, payload: ActionPayload) {
    this.type = type;
    this.payload = payload;
  }
}

const initialState = {
  snackBar : {}
};

const snackBarReducer = (state = initialState, action: Action) => {
  if (action.type === ACTION_TYPES.SNACK_BAR_OPEN) {
    return {...state, snackBar: { open: true, message: action.payload.description }};
  }
  else if (action.type === ACTION_TYPES.SNACK_BAR_CLOSE){

    return {...state, snackBar: { open: false, message: action.payload.description }};
  }
  else return state;
};

const rootReducer = combineReducers({
  snackBar: snackBarReducer,
});

export default rootReducer;
