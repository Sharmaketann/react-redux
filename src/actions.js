// Creating reusable actions. If needed to change the structure of the object we can change it only once here and it will replicate throughout the application.
// These are also called as Action Creators.

import * as actions from './actionTypes'

// Using arrow function.
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
})

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: 'Bug1',
//     },
//   }
// }
