import React, { Component } from 'react';
import Listyuan from '../comment/Listyuan'
import Scroll from '../../comm/scroll/scroll'
import '../style/center.css'
import axios from 'axios'
class Center extends Component {
  state={
    cinemas:[],
    index:1,
  }
  componentWillMount(){
    axios.get(`/v1/ajax/cinemaList?day=${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=${new Date().getTime()}&cityId=1`)
    .then(res =>{
    //  console.log(res)
     this.setState({
       cinemas:res.data.cinemas
     })
    })
  }
  getCinema(data){
    let cinemas = this.state.cinemas
       this.setState({
        cinemas:[...cinemas,...data]
       },() =>{
        //  console.log(this.state.cinemas)
       })
      // console.log(cinemas)
  }
  render() {
    return (
      <div className='conter'>
        <div className="conter-header">
          <div className="center-address">北京</div>
          <input type="text" placeholder='搜索影院'/>
        </div>
        <Scroll onScroll={() => { }} refresh={true} getCinema={this.getCinema.bind(this)} index={this.state.index}>
         <Listyuan cinemas={this.state.cinemas}></Listyuan>
        </Scroll>

      </div>
    );
  }
}

export default Center;