import {
  GET_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
} from "../action-creators/types";

const initialState = {
  list: [],
};

const actions = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
    case ADD_ITEM:
    case REMOVE_ITEM:
    case EDIT_ITEM:
      return { ...state, list: [...payload] };
    default:
      return state;
  }
};

export default actions;
