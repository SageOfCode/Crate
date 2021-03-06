// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, GET_STYLE_SCORE, STYLE_SCORE_RESPONSE } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null,
  style: null
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case GET_STYLE_SCORE:
      return {
        ...state,
        details: action.details
      }

    case STYLE_SCORE_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        style: action.style
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}
