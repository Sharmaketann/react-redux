import configStore from './store/configStore'
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs'
import { projectAdded } from './store/projects'

const store = configStore()

store.subscribe(() => {
  console.log('Store changed')
})

store.dispatch(projectAdded({ name: 'Project 1' }))

store.dispatch(bugAdded({ description: 'Bug 1' }))
store.dispatch(bugAdded({ description: 'Bug 2' }))
store.dispatch(bugResolved({ id: 1 }))

const unresolved = getUnresolvedBugs(store.getState())
console.log(unresolved)
