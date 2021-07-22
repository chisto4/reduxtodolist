import { 
  CLEAR_ALL,
  CREATE_TODO,
  COUNT_ARRAY,
  DELETE_HENDLER,
  COMPLETE_HENDLER,
  SET_FILTER_TODOS,
  SET_ALL_ARRAY_ELELMENT,
} from "../reducer/Constans";

const initialState = {
  todosArr: [
    {completed: false, text: 'Test Hello', id: 1}
  ],
  filterValue: "all",
  count: 1,
};

const Reductor = (state = initialState, action) => {

  switch (action.type){

    case CLEAR_ALL:
      let filArr = state.todosArr;
      filArr = filArr.filter(todo => todo.completed === false)
      return {
        ...state,
          todosArr: filArr,
          count: filArr.length,
      };
         
    case CREATE_TODO:
      const inputText = action.payload;
      return {
        ...state,
        todosArr: state.todosArr.concat(
          {
            text: inputText, completed: false, id: Math.random()*10
          }
        ),
        count: state.count + 1,
      };  

    case COUNT_ARRAY:
      let countArray = state.todosArr.length;
      return {
        ...state,
        count: countArray,
      };


    case DELETE_HENDLER:
      const removeId = action.payload;
        let myTodos = state.todosArr;
        myTodos = myTodos.filter((el) => el.id !== removeId);
        return {
          ...state,
          todosArr: myTodos,
          count: myTodos.length,
        };
       
    case COMPLETE_HENDLER:
      const completeId = action.payload;
        let completeTodos = state.todosArr;
        completeTodos = completeTodos.map((item) => {
           if(item.id === completeId){
             return{
               ...item, 
               completed: !item.completed,
             };
           }
           return item;
         });
         return {
           ...state,
           todosArr: completeTodos
         }

    case SET_FILTER_TODOS:
      let filtValue = action.payload;
      return{
        ...state,
        filterValue: filtValue
      };

    case SET_ALL_ARRAY_ELELMENT:
      let allArrEl = state.todosArr;  
        if(allArrEl.some(elem => !elem.completed)) {
          allArrEl = allArrEl.map((item) => {
        return{
        ...item,
        completed: true,
        }
        })
          } else {
    allArrEl = allArrEl.map((item) => {
      return{
        ...item,
        completed: false
      }
    })
          }
          return{
            ...state,
            todosArr: allArrEl
          };

  default:
    return state;
  }
};

export default Reductor;
