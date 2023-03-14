export default function (state, action) {
  switch (action.type) {
    case 'add':
      // console.log('add called');
      return action.payload ? [
        ...state,
        {
          id: Math.random().toString().substring(3, 9),
          task: action.payload,
          complete: false
        }
      ] : state

    case 'toggle':
      return [
        ...state.map((todo) =>
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : { ...todo }
        )
      ]
      
    case 'remove':
      return state.filter(todo => todo.id !== action.payload)

    case 'removeAll':
      return []
    default:
      return state
  }
}