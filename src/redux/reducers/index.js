import { combineReducers } from 'redux'

import items from './Items'
import resto from './Resto'

const appReducer = combineReducers({
  items, resto
})

export default appReducer
