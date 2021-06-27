import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./action.js";

const unsubscribe = store.subscrbie(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store);
