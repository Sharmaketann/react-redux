import { createAction, createReducer } from '@reduxjs/toolkit'
// Action Types
const BUG_ADDED = 'bugAdded'
const BUG_REMOVED = 'bugRemoved'
const BUG_RESOLVED = 'bugResolved'

// Action creators

export const bugAdded = createAction('bugAdded')
export const bugResolved = createAction('bugResolved')
export const bugRemoved = createAction('bugRemoved')

// Reducers
let lastId = 0

export default createReducer([], {
  // key: value
  // actions: function(event => event handler)

  bugAdded: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    })
  },

  bugResolved: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id)
    bugs[index].resolved = true
  },
})
