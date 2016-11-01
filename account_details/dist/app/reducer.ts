import { ACCOUNT_DETAILS_INIT_LOAD, ACCOUNT_DETAILS_SUCCESS, ACCOUNT_DETAILS_FAIL } from './components/account_details.actions';
import { AppStates, IAppState, IDetails } from './models';


const reducer = (state: IAppState = {state: AppStates.Idle}, action: any) => {
  switch (action.type) {
    case ACCOUNT_DETAILS_INIT_LOAD:
      return Object.assign({}, state, {state: AppStates.Loading});
    case ACCOUNT_DETAILS_SUCCESS:
      return Object.assign({}, state, {details: action.payload, state: AppStates.Success});
    case ACCOUNT_DETAILS_FAIL:
      return Object.assign({}, state, {state: AppStates.Fails});
  }
  return state;
};

export default reducer;
