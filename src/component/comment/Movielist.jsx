import React, { Component } from 'react';

class Movielist extends Component {
  detail =(id) =>{

  }
  render() {
    const {coming} = this.props
    console.log(coming)
    let arry = coming.map(item =>( <div className="item"  key={item.id} onClick={this.detail(item.id)}>
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
              <div className="show-info line-ellipsis">{item.rt}</div>
            </div>
          </div>
          <div className="button-block" data-id="1189879">
            <div className= {item.preShow  ?"btn":'pre'}  data-id="1189879"><span className={item.preShow  ?'fix':''} >{item.preShow  ?'预售':'想看'}</span></div>
          </div>
        </div>
      
    </div>
  </div>  
))
    return (
      <div>
        {
          arry
        }
        
      </div>
    );
  }
}

export default Movielist;