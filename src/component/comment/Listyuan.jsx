import React, { Component } from 'react';

import {withRouter } from 'react-router-dom'
class Listyuan extends Component {
  constructor(props){
    super(props)
  }
  detailCinema = (id) =>{
      this.props.history.push(`/cinema/${id}`)
    // this.props.history.push('/cinema')
  }
  render() {
    let {cinemas} = this.props
    // console.log(cinemas)
    let cinema = cinemas.map( item =>(
      <div className=' detail-cinema' key= {item.id} onClick={this.detailCinema.bind(this,item.id)}>
        <div className="cinema-item">
            <div className="cinema-content">
              <div className="cinema-title">
                <span>{item.nm}</span>
                <span className="cinema-price">
                  <span className="price">{item.sellPrice}</span>
                  <span className="price-co">元</span>
                </span>
              </div>
              <div className="cinema-address">
                 <div className="detail-address">{item.addr}</div>
                 <div className="cinema-long">{item.distance}</div>
               </div>
              <div className="label-block">
               <div className="allowRefund">退</div>
               <div className="endorse">改签</div>
               <div className="snack">小吃</div>
             </div>
              <div className="nearlytime">
                <span className='nearlyct'>最近场次:</span>
                <span className="nearly-time">{ item.showTimes}</span>
              </div>
            </div>
        </div>
      </div>
    ))
    return (
  //     <div className=' detail-cinema'>
  //       <div className="cinema-item">
  //           <div className="cinema-content">
  //             <div className="cinema-title">
  //               <span>酒店</span>
  //               <span className="cinema-price">
  //                 <span className="price">199</span>
  //                 <span className="price-co">元</span>
  //               </span>
  //             </div>
  //             <div className="cinema-address">
  //                <div className="detail-address">11111111111</div>
  //                <div className="cinema-long">3km</div>
  //              </div>
  //             <div className="label-block">
  //              <div className="allowRefund">退</div>
  //              <div className="endorse">改签</div>
  //              <div className="snack">小吃</div>
  //            </div>
  //             <div className="nearlytime">
  //               <span className='nearlyct'>最近场次</span>
  //               <span className="nearly-time">1234</span>
  //             </div>
  //           </div>
  //       </div>
  //     </div>
        <div>
         
          {
            cinema
          }
          {
            cinemas.length > 0 ? '': ( <div className="nocinema">
            <img src="//p0.meituan.net/movie/8b521599145a30fe521be9f2d60392d845310.png" alt=""/>
            <div className="nocinema-title">暂无符合条件的影院</div>
          </div>)
          }
        </div>
    );
  }
}
            
            
                

export default  withRouter(Listyuan);
        
    
        