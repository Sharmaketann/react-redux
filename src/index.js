import store from './store'
import { bugAdded } from './actions'

// After using Reusable actions.

store.dispatch(bugAdded('Bug 1'))

console.log(store.getState())

// Before using Reusable actions. **

// //Subscribe to the store.
// const unsubscribe = store.subscribe(() => {
//   console.log('Store Change', store.getState())
// })

// // Dispatch an action for adding the Bug
// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: 'Bug1',
//   },
// })

// // Second time while despatching the action we will not be notified due to unsubscribe function.

// unsubscribe() // If the current UI is not going to be visible we will unsubscribe from the store.

// // Dispatch an action for removing the Bug
// store.dispatch({
//   type: 'bugRemoved',
//   payload: {
//     id: 1,
//   },
// })

// console.log(store.getState())
