export default function Reducer(state, action) {
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

    case 'sorting':
      switch (action.payload) {
        case "todoFirst":
          console.log('todoFirst')
          return [...state.sort((action1, action2) => {
            return action1.completed > action2.completed ? 1 : -1
          })]

        case "doneFirst":
          console.log('doneFirst')
          return [...state.sort((action1, action2) => {
            return action1.completed < action2.completed ? 1 : -1
          })]

        case "alphabetically":
          console.log('alphabetically')
          return [...state.sort((action1, action2) => {
            return action1.todo.localeCompare(action2.todo);
          })]

        case 'reverseAlphabetically':
          console.log('reverseAlphabetically')
          return [...state.sort((action1, action2) => {
            return action2.todo.localeCompare(action1.todo);
          })]

        default:
          return [...state.sort((action1, action2) => {
            return action1.id < action2.id ? 1 : -1
          })]
      }
      
    case 'remove':
      return state.filter(todo => todo.id !== action.payload.id)

    case 'removeAll':
      return []

    default:
      return state
  }
}