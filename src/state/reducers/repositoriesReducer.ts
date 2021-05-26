import { Action } from '../actions/index';
import { ActionType } from '../action-types';

interface RespositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

export const reducer = (
	state: RespositoriesState,
	action: Action
): RespositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};
export default reducer;
