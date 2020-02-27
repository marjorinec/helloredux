import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
  articles: []
}

export default function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return {
			...state,
			articles: {
				...state.articles,
				[action.payload]: action.payload
			}
		}
	}

	return state
}
