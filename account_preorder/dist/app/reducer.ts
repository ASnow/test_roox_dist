import { combineReducers } from 'redux';
import { IDialog, IDialogsState } from './models';
import { OPEN_DIALOG, CLOSE_DIALOG } from './components/account_preorder.actions';


function  dialogsReducer(state: IDialogsState = {stack: [], current: null}, action: any) {
  switch (action.type) {
    case OPEN_DIALOG:
      let newCurrent = state.current || action.payload;
      return Object.assign({}, state, {stack: [action.payload].concat(state.stack), current: newCurrent});
    case CLOSE_DIALOG:
      let newStack = state.stack.slice(1);
      return Object.assign({}, state, {stack: newStack, current: newStack[0]});
  }
  return state;
};

export default combineReducers({
  dialogs: dialogsReducer
});
