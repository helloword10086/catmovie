import { combineReducers} from 'redux'
import * as ActionType from './actionsType'

function movielist(movielist = {},action){
     switch(action.type){
       case ActionType.MOVIELIST :
         return action.movie;
         default:
            return movielist
        
     }
}
function moviesId(moviesId = [],action){
  switch(action.type){
    case ActionType.MOVIEID :
      return action.moviesId;
      default:
         return moviesId
     
  }
}


export default combineReducers({
  movielist,
  moviesId
})