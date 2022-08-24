import store from './store'

// Dispathc an action for adding the Bug
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
})

// Dispatch an action for removing the Bug
store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
})

console.log(store.getState())
