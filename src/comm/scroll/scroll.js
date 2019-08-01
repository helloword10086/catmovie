import React, { Component } from 'react';
import BScroll from 'better-scroll'
 import './scroll.css'
 import axios from 'axios'
 import { connect } from 'react-redux'
//  import Lazyload from 'react-lazyload'
const mapStateToProps = (state) =>{
  return{
    // movielist: state.movielist,
    moviesId: state.moviesId
  }
}
class Scroll extends Component {
  state = {
    bscroll:{},
    count:20,
    moremovie:[],
    flag:true,
    all:12
  }
  componentDidUpdate(){
    // console.log(666)
    if(this.bscroll && this.props.refresh){
      this.bscroll.refresh()
    }
  //   this.bscroll.on('pullingUp', () =>{
  //     console.log(6666)
  //    let count = this.state.count
  //    axios.get(`v1/ajax/cinemaList?day=${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}&offset=${count}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=${new Date().getTime()}&cityId=1`)
  //    .then(res =>{
  //      console.log(res.data.cinemas)
       
  //     this.setState({
  //       count: count +20,
  //       moremovie:res.data.cinemas

  //     })
  //      this.props.getCinema(res.data.cinemas)
  //      this.bscroll.finishPullDown()  
  //    })
  // })
  }
  
  // componentDidUpdate() {
  //   if(this.bscroll && this.props.refresh) {
  //     this.bscroll.refresh()
  //   }
  // }
  componentDidMount(){
    console.log(this.props.children)
    if(!this.bscroll){
      this.bscroll = new BScroll(this.refs.scrollView,{
        probeType:3,
        pullUpLoad:{
          threshold: -30, 
          
        },
        click:() =>{},
      })
       this.bscroll.on('scroll',(e) =>{
            this.props.onScroll(e)
       })
       this.bscroll.on('pullingUp', () =>{
           let {index} =  this.props
          console.log(this.props.index)
          // console.log(index)
          if(index = 1){

            this.setState({
              flag:false
            })
              // console.log(6666)
             let count = this.state.count
             axios.get(`/v1/ajax/cinemaList?day=${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}&offset=${count}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=${new Date().getTime()}&cityId=1`)
             .then(res =>{
               console.log(res.data.cinemas)
               
              this.setState({
                count: count +20,
                moremovie:res.data.cinemas,
                flag:true
              })
               this.props.getCinema(res.data.cinemas)
               this.bscroll.finishPullUp() 
             }).catch(() =>{
              this.setState({
                flag:true
              })
             })
          }
          if(index = 2){
            console.log(666)
            let {moviesId} = this.props;
            let {all} = this.state;
            this.setState({
              flag:false
            })
            // let string =''
            // for(all;all<all+5; all++){
            //  string +='/v1/ajax/moreComingList?token=&movieIds=' + moviesId[all] +  '%'
            // }
            // string +=moviesId[all]
            // console.log(string)
            axios.get(`/v1/ajax/moreComingList?token=&movieIds=${moviesId[all]}%2c${moviesId[all+1]}%2c${moviesId[all+2]}%2c${moviesId[all+3]}%2c${moviesId[all+4]}%2C${moviesId[all+5]}%2C${moviesId[all+6]}%2C${moviesId[all+7]}%2C${moviesId[all+8]}%2C${moviesId[all+9]}`)
            .then(res =>{
              console.log(res)
              this.setState({
                all:all+10,
                flag:true
              })
              this.props.getmovieslist(res.data.coming)
              this.bscroll.finishPullUp()
            }).catch(() =>{
              this.setState({
                flag:true
              })
             })
          }
       })
       
    }
  }
  componentWillMount(){
    this.bscroll = null;
    // this.b = 1
  }
  render() {
    // console.log(this.b)
    // console.log(this.props)
    // console.log(this.props.getCinema)
    return (
         <div className='betterscroll'>
          {/* <div className='loading-url'></div> */}
          {this.state.flag ? '' :(<div className='loading-url'></div>)}
          <div className="scroll-view" ref='scrollView' >
            
            {this.props.children}
          </div>
         </div> 
        
    );
  }
}

export default connect(mapStateToProps)(Scroll);