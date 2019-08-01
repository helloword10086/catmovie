import React, { Component } from 'react';
import Movietitle from '../comment/Movietitle'
import axios from 'axios'
import '../style/detailcinema.css'
class Detailcinem extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies:[],
      // moviename:[],
      index:0,
      onLonding:false,
      cinemaData:{},
    }
  }
  componentWillMount(){
  //  console.log( this.props.match.params.id )
   let id = this.props.match.params.id
   axios.get(`/v1/ajax/cinemaDetail?cinemaId=${id}`)
   .then(res =>{
    //  console.log(res.data)
     let movies = res.data.showData.movies
     for(let i = 0 ;i<movies.length;i++){
      // console.log(movies[i].img.slice(25))
      movies[i].img= 'https://p0.meituan.net/148.208' + movies[i].img.slice(25)
    }
    //  new Promise( (resolve, reject) =>{
       
      this.setState({
         moviename:res.data,
         cinemaData:res.data.cinemaData,
         movies : movies,
         onLonding: true
       })
    //    resolve()
    //  })
    //  console.log('------',this.state.moviename)
   })
  
  }
  componentDidMount(){
    this.refs.post.addEventListener('scroll',(e) =>{
      // console.log(e.target.scrollLeft)
      // let index = Math.ceil(e.target.scrollLeft/75)
      // console.log(index)
      this.setState({
        index:index
      })
    })
  }
  postmovies = (index) =>{
    //  console.log(this.refs.post)
    //  this.refs.post.style.transform=translateX(`${index * 80}px`)
    // console.log(index)
    // this.refs.post. = 75*( index-this.state.index)
  }
  render() {
    // let index = this.state.index
    // let {movies} = this.state.movies
   
    //  console.log(this.state.movies.length)
    return (
      <div className='cinema-block'>
        <div className="cinema-info">
          <div className="title line-ellipsis">{this.state.cinemaData.nm}</div>
          <div className="location line-ellipsis">{this.state.cinemaData.nm}</div>
          <div className="location-icon" >
            <img src="data:image/png;base64,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"/></div>
	      </div>
        <div className='cinema-swiper'>
          <div className="post-bg"></div>
          <div className="post-bg-filter"></div>
          <div className="post-body" ref='post'>
           
          {
            this.state.movies.map( (item , index)=> (<img src={item.img} alt='' onClick={this.postmovies.bind(this,index)} className={ index ==this.state.index ? 'cinema-url' : '' }  key={index}></img>))
          }
           </div>
        </div>
        <div className="movie-info">
				   <div className="movie-title line-ellipsis">
				 	  <span className="title">{ this.state.movies.length > 0 ? this.state.movies[this.state.index].nm :''}</span>
					  <span className="grade">
						<span>{ this.state.movies.length > 0 ? this.state.movies[this.state.index].sc :''}<span className="small">分</span></span>
						
					 </span>
					
			   	</div>
			  	<div className="movie-desc line-ellipsis">{ this.state.movies.length > 0 ? this.state.movies[this.state.index].desc :''}</div>
			  </div>
        {
          this.state.movies.length > 0 ?<Movietitle movies ={this.state.movies} index = {this.state.index}></Movietitle>:''
        }
        {/* <Movietitle movies ={this.state.movies} index = {this.state.index}></Movietitle> */}
      </div>
    );
  }
}

export default Detailcinem;