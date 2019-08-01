import React, { Component } from 'react';
import '../style/detail.css'
import axios from 'axios'
import Scroll from '../../comm/scroll/scroll'
import { connect } from 'react-redux'
import Listyuan from '../comment/Listyuan'
const mapStateToProps = (state) =>{
  return {
    movielist: state.movielist
  }
}
class Detail extends Component {
  state ={
    movielist:{},
    cinemas:[]
  }
  componentWillMount(){
    // console.log(this.props)
    let movielist = this.props.movielist
    console.log(movielist)
    let movieId = this.props.movielist.id;
    this.setState({
      movielist: movielist,
    })
    axios({ 
      method: 'post',
      url: `/v1/ajax/movie?forceUpdate=${ new Date().getTime()}`,
      data:{
        movieId:  movieId ,
        day: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() }`,
        offset: 0,
        limit: 20,
        districtId: -1,
        lineId: -1,
        hallType: -1,
        brandId: -1,
        serviceId: -1,
        areaId: -1,
        stationId: -1,
        item: null,
        updateShowDay: true,
        reqId: new Date().getTime(),
        cityId: 1
      }
    }).then(res =>{
      console.log(res)
      this.setState({
        cinemas:res.data.cinemas
      })
    })
  }
  render() {
    
    return (
      <div className='detail-body'>
         <div className="detail-header">
          <div className="detail-bgc"></div>
          <div className="detail-bgcimg"></div>
          <div className="detail-header-content">
            <div className="detail-poster">
              <img src={this.state.movielist.img} alt=""/>
            </div>
            <div className="detail-content">
              <div className="detail-title">{this.state.movielist.nm}</div>
              <div className="detail-want">{this.state.movielist.wish} <span className="want-cont">人想看</span></div>
              <div className='detail-3d'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=" alt=""/>
              </div>
              <div className="detail-time">{this.state.movielist.rt}大陆上映</div>
            </div>
          </div>
         </div>
         <Scroll onScroll={() => { }} refresh={true}>
         <Listyuan cinemas={this.state.cinemas}></Listyuan>
         </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detail);