import React, { Component } from 'react';
import '../style/recommend.css'
import axios from 'axios'
import Scroll from '../../comm/scroll/scroll'
import { getmovielist ,getmoviesId} from '../../redux/action'
import { connect } from 'react-redux'
const mapStateToProps = (state) =>{
  return{
    movielist: state.movielist,
    moviesId: state.moviesId
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    showMovie: (movie) =>{
      dispatch(getmovielist(movie))
    },
    pushmid: (moviesId) =>{
      dispatch(getmoviesId(moviesId))
    }
  }
}
class Recommed extends Component {
  state = {
    movieList:[],
    movieId:[]
  }
  detail = (id) =>{
    let {showMovie} = this.props
    showMovie(id)
    // console.log(id)
    this.props.history.push('/detail')
    // console.log(666)
  }
  getmovieslist =(data) =>{
    // let mlist = data
    for(let i = 0 ;i<data.length;i++){
      // console.log(movieList[i].img.slice(25))
      data[i].img= 'https://p0.meituan.net/128.180' + data[i].img.slice(25)
    }
    let {movieList} = this.state;
    this.setState({
      movieList:[...movieList,...data]
     },() =>{
      //  console.log(this.state.cinemas)
     })
  }
  componentWillMount(){
    axios.get('/v1/ajax/movieOnInfoList?token=')
   .then (res => {
       console.log(res.data)
      let movieList = res.data.movieList
      let {pushmid} = this.props
      pushmid(res.data.movieIds)
      for(let i = 0 ;i<movieList.length;i++){
        // console.log(movieList[i].img.slice(25))
        movieList[i].img= 'https://p0.meituan.net/128.180' + movieList[i].img.slice(25)
      }
      // console.log(movieList)
      this.setState({
        movieList:movieList,
        // moviesId
      })
   })
  }
  render() {
      // let {movielist} = this.props
      console.log(this.props)
      
   let movies=this.state.movieList
    //  console.log(movies)
     let arry = movies.map(item =>( <div className="item"  key={item.id} onClick={this.detail.bind(this,item)}>
     <div className="main-block">
      <div className="avatar" >
        <div className="default-img-bg">
          <img src={item.img} alt=''></img>
        </div>
      </div>
        <div className="mb-outline-b content-wrapper">
          <div className="column content">
            <div className="box-flex movie-title">
              <div className="title line-ellipsis v3dimax_title">{item.nm}</div>
              <span className="version v3d imax"></span>
            </div>
            <div className="detail column">
              <div className="wantsee line-ellipsis">
                <span className="person">{item.wish}</span>
                <span className="p-suffix">人想看</span>
              </div>
              <div className="actor line-ellipsis">{item.star}</div>
              <div className="show-info line-ellipsis">{item.showInfo}</div>
            </div>
          </div>
          <div className="button-block" data-id="1189879">
            <div className= {item.globalReleased  ?"btn":'pre'}  data-id="1189879"><span className={item.globalReleased  ?'fix':''} >{item.globalReleased  ?'购票':'预售'}</span></div>
          </div>
        </div>
      
    </div>
  </div>  
))
// console.log(arry)
    return (
      
      
       <Scroll onScroll={() => { }} refresh={true} index={2} getmovieslist={this.getmovieslist.bind(this)}>

         <div>{arry}</div>
       </Scroll>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommed);