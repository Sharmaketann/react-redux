import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './bugs'

export default function configStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }))
  return store
}
