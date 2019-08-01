import React, { Component } from 'react';
import '../style/search.css'
import axios from 'axios'
function debounce(func, wait=500) {
  let timeout;  // 定时器变量
  return function(event){
      clearTimeout(timeout);  // 每次触发时先清除上一次的定时器,然后重新计时
      event.persist && event.persist()   //保留对事件的引用
      //const event = e && {...e}   //深拷贝事件对象
      timeout = setTimeout(()=>{
          func(event)
      }, wait);  // 指定 xx ms 后触发真正想进行的操作 handler
  };
}
class Search extends Component {
  state = {
    inputValue:'',
    movies:[],
    flag:false,
    hostory:[]
  }
  searchMovie = debounce((e)=>{
    // console.log(e.target.value)
    let {hostory} = this.state
    
    // hostory.push(e.target.value)
    // console.log(hostory)
    let value = e.target.value
    if(e.target.value !== ''){

      this.setState({
        flag:true
      })
    }else{
      this.setState({
        flag:false
      })
    }

    let str = encodeURI(e.target.value)
    this.setState({
      inputValue:e.target.value
    })
    console.log(str)
    if(e.target.value !=''){

      axios.get(`/v1/ajax/search?kw=${str}&cityId=10&stype=-1`).then(res =>{
        // console.log(res.data.movies)
        // console.log(history)
        if(res.data.movies){
          // let list =
          for(let i = 0 ;i<res.data.movies.list.length;i++){
            // console.log(movieList[i].img.slice(25))
            res.data.movies.list[i].img= 'https://p0.meituan.net/128.180' + res.data.movies.list[i].img.slice(25)
          }
          hostory.push(value)
          this.setState({
            movies:res.data.movies.list,
            hostory: hostory
          },() =>{ console.log(this.state.hostory)})
          
        }
      })
    }
})
  cancel = () =>{
    // this.setState({
    //   inputValue:''
    // })
    this.props.history.go(-1)
  }
  hosearch = (item) =>{
    let str = item
    this.setState({
      inputValue:str
    })
    console.log(this.state.inputValue)
    axios.get(`/v1/ajax/search?kw=${str}&cityId=10&stype=-1`).then(res =>{
      // console.log(res.data.movies)
      // console.log(history)
      if(res.data.movies){
        // let list =
        for(let i = 0 ;i<res.data.movies.list.length;i++){
          // console.log(movieList[i].img.slice(25))
          res.data.movies.list[i].img= 'https://p0.meituan.net/128.180' + res.data.movies.list[i].img.slice(25)
        }
        // hostory.push(value)
        this.setState({
          movies:res.data.movies.list,
          // hostory: hostory
          flag:true
        },() =>{ console.log(this.state.hostory)})
        
      }
    })
  }
  showMovie = (id) =>{
    window.location=`http://m.maoyan.com/movie/${id}?_v_=yes&channelId=4&cityId=10&$from=canary#`
  }
  
  render() {
  let  movie = this.state.movies.map((item,index) =>(
      <div className="search-result" key={index}>
      <div className="result-wrapper">
        <div className="result">
        <h3>电影/电视剧/综艺</h3>
        <div className="list" onClick={this.showMovie.bind(this,item.id)}>
          <div className="movie cell" data-id="1229534">
          <img className="poster" src={item.img} alt=""/>
          <div className="info">
           <div className="name-score">
            <p className="name">
              <span className="one-line">{item.nm}</span>
              <span className="version "></span>
            </p>            
      
            <span className="wish">
              <span className="num">{item.wish}</span>人想看
            </span>
      
          </div>
              <div className="detail-section">
                <div className="detail-items">
                  <p className="ename one-line">{item.enm}</p>
                  <p className="catogary">{item.cat}</p>
                  <p className="release">{item.pubDesc}</p>
                </div>
                
                  <div className="buy-btn presale" data-id="1229534">{ item.globalReleased? '购买' : '预购'}</div>                
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
   
    ))
    let hos = this.state.hostory.map( (item,index) =>(
      <div className="search-history" key={index} onClick={this.hosearch.bind(this,item)}>
      <div className="history-item" data-index="0">
        <span className="history-icon"></span>
        <span className="word one-line">{item}</span>
        <div className="del-word"></div>
      </div>
     </div>
    
    ))
    return (
      <div className="search-page">
        <div className="search-header">
          <div className="input-wrapper">
          {/* <img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt=""/> */}
        <input className="search-input" type="text" placeholder="搜电影、搜影院" onChange={this.searchMovie}  defaultValue={this.state.inputValue}/>
          {/* <img className="del-input" style="display:none" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt=""/> */}
         </div>
         <div className="cancel" onClick={this.cancel}>取消</div>
         </div>
        
       {
         this.state.flag ? movie : hos
       }
       </div>
    );
  }
}



export default Search;