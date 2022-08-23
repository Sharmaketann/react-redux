let lastId = 0

export default function reducer(state = [], action) {
  // Switch Case

  switch (action.type) {
    case 'bugAdded':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: true,
        },
      ]
    case 'bugRemoved':
      return state.filter((bug) => bug.id !== action.payload.id)

    default:
      return state
  }
}
