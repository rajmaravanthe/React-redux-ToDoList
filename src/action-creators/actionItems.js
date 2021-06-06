import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "./types";

export const getItems = () => (dispatch) => {
  const payload = getStoredItems();
  dispatch({
    type: GET_ITEMS,
    payload,
  });
};

export const addItem = (item) => (dispatch) => {
  const index = Math.floor(Math.random() * 1000 + 10000);
  const items = getStoredItems();
  const toDoList = items ? items : [];

  toDoList.push({ key: index, value: item });
  setItemsStore(toDoList);

  dispatch({
    type: ADD_ITEM,
    payload: toDoList,
  });
};

export const removeItem = (key) => (dispatch) => {
  console.log(key);
  const toDoList = getStoredItems();
  const remainingList = toDoList.filter((list) => list.key !== key);
  setItemsStore(remainingList);

  dispatch({
    type: REMOVE_ITEM,
    payload: remainingList,
  });
};

export const editItem = (item, index) => (dispatch) => {
  const toDoList = getStoredItems();
  const editedList = toDoList.map((list) => {
    if (list.key === index) {
      list.value = item;
    }
    return list;
  });
  setItemsStore(editedList);

  dispatch({
    type: EDIT_ITEM,
    payload: editedList,
  });
};

const getStoredItems = () => {
  return JSON.parse(localStorage.getItem("toDoList"));
};

const setItemsStore = (items) => {
  localStorage.setItem("toDoList", JSON.stringify(items));
};
