let lastId = 0;
// import {BUG_ADDED , BUG_REMOVED} from "./actionTypes.js"
import * as actions from "./actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
      break;

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload);
      break;

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }

  //   if (action.type === "bugAdded")
  //     return [
  //       ...state,
  //       {
  //         id: ++lastId,
  //         description: action.payload.description,
  //         resolved: false,
  //       },
  //     ];
  //   else if (action.type === "bugRemoved")
  //     return state.filter((bug) => bug.id !== action.payload);

  //   return state;
};

export default reducer;
