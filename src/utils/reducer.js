export const Reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return [...action.payload]

    case 'add':
      return [...state, action.payload]

    case 'toggle':
      return [
        ...state.map((todo) =>
          todo.id === action.payload.id ? action.payload : { ...todo }
        )
      ]
      
    case 'remove':
      return state.filter(todo => todo.id !== action.payload.id)

    case 'removeAll':
      return []

    default:
      return state
  }
}