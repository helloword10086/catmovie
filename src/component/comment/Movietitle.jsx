import React, { Component } from 'react';
// import { BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
class Movietitle extends Component {
  componentDidMount(){
    let style = document.getElementById('fontface')
    let stone =document.getElementById('stonefont')
    //  stone.style.cssText = style
  }
  state = {
    a: 0
  }
  chanceDay =(index) =>{
   this.setState({
     a:index
   })
  }
  render() {
     console.log(this.props)
     let { movies,index} = this.props
     let plist = movies[index].shows[this.state.a].plist
     let arry = plist.map( (item,index) =>(
      <div className="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item" key={index}>
				
      <div className="item box-flex">
        <div className="time-block">
          <div className="begin">{item.tm}</div>
          <div className="end">15:58<span className="tui">散场</span></div>
          
        </div>
        <div className="info-block">
          <div className="lan">{item.lang} {item.tp}</div>
          <div className="hall">{item.th}</div>
        </div>
        <div className="price">
          <div className="sellPr"><span className="d">¥</span><span dangerouslySetInnerHTML={{ __html: item.sellPr}}></span></div>
          {
           item.vipPrice ?  <div className="vipPrice"><span className="icon">{item.vipPriceName}</span><span className="num">¥{item.vipPrice}</span></div> :''
          }
          <div className="extraDesc">{item.extraDesc}</div>
        </div>
        <div className="button-block">
          <div className="button" data-bid="dp_wx_cinema_show_btn">购票</div>
        </div>
      </div>
      
    </div>
    
     ))
     console.log(plist)
    // let arr = movies.lengeh <0 && movies[index].shows.map( (item ,index) =>(
    //      <div className="movie-day">
    //        <NavLink>{item.dateShow} </NavLink>
    //      </div>
    //    ))
      //  console.log(arr)
    return (
      <div className="moviebuy">
      <div className="movie-date">
         {
           movies[index].shows.map( (item,index) =>(
          <div onClick={this.chanceDay.bind(this,index)} className={this.state.a === index ? 'movie-day active' : 'movie-day'} key={index}>
              <div  >{item.dateShow} </div>
            </div>
          ))
         }
      </div>
      
      {
        arry
      }
      </div>
    );
  }
}
						
						
						
						
						
						

export default Movietitle;