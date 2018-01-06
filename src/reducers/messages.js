import { SEND_AI_MESSAGE, RECEIVE_AI_MESSAGE, REMOVE_MESSAGE } from '../actions'


export function messages(state= [], action) {
  switch (action.type) {
    case SEND_AI_MESSAGE : {
      return [ ...state, {
        message: action.message,
        from: "user",
        timestamp: new Date()
      }]
    }
    case RECEIVE_AI_MESSAGE : {
      return [ ...state, {
        message: action.message,
        from: "ai",
        timestamp: new Date()
      }]
    }
    case REMOVE_MESSAGE : {
      return state.filter(message => {
        return message.id !== action.id
      })
    }
    default: {
      return state
    }
  }
}

export function AI(state=[], action) {

}
