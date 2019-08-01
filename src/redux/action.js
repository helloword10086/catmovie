import * as ActionType from './actionsType'

export function getmovielist(movie){
     return {
       type:ActionType.MOVIELIST,movie
     }
}
export function getmoviesId(moviesId){
  return {
    type:ActionType.MOVIEID,moviesId
  }
}