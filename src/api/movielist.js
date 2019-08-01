import  jsonp from './jsonp'
import {URL,PARAM,OPTION}  from './config'
export function getmovielist(){
  return jsonp(
   URL.carousel,
 
    OPTION
  )
}