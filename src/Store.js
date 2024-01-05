import {createStore} from 'redux'

import mainreduers from './redux/Reducers/Mainreduers'


const store =  createStore(mainreduers)



export default store


