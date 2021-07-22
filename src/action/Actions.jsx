import { 
  CLEAR_ALL,
  CREATE_TODO,
  COUNT_ARRAY,
  DELETE_HENDLER,
  COMPLETE_HENDLER,
  SET_FILTER_TODOS,
  SET_ALL_ARRAY_ELELMENT,
} from "../reducer/Constans";

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const creatTodo = (inputText) => ({
  type: CREATE_TODO,
  payload: inputText
});

export const countArray = () => ({
  type: COUNT_ARRAY,
});

export const deleteHandler = (id) => ({
  type: DELETE_HENDLER,
  payload: id
});

export const completeHandler = (id) => ({
  type: COMPLETE_HENDLER,
  payload: id
});

export const setFilteredTodos = (value) => ({
  type: SET_FILTER_TODOS,
  payload: value
});

export const setAllArrayElement = () => ({
  type: SET_ALL_ARRAY_ELELMENT,
});