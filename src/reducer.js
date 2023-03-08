export default function(state, action) {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: Date.now(),
            title: action.payload,
            completed: false
          }
        ]
      case 'toggle':
        console.log('toggle executed');
        console.log(state);
        return state.map(todo => {
          if (todo.id === action.payload) {
            // debugger
            todo.completed = true
          }
          return todo
        })
      case 'remove':
        return state.filter(todo => todo.id !== action.payload)
      default:
        return state
    }
  }