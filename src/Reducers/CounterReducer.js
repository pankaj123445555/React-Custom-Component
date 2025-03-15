export const counterReducer = (state,action) =>{
   
    // lets write an logic for the counter Reducer
    switch (action.type) {
        case "increment":
          return { ...state, count: state.count + 1 };
        case "decrement":
          return { ...state, count: state.count - 1 };
        default:
          return "Unrecognized command";
      }
}