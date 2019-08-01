import React, { Component } from 'react';
import axios from 'axios'
import "../style/new.css"
import Movielist from '../comment/Movielist'
import Scroll from '../../comm/scroll/scroll'
class New extends Component {
  state={
    coming:[]
  }
  componentWillMount(){
    console.log(666)
    axios.get('/v1/ajax/comingList?ci=1&token=&limit=10').then(res =>{
      // console.log(res.data)
      let coming = res.data.coming
      for(let i = 0 ;i<coming.length;i++){
        // console.log(coming[i].img.slice(25))
        coming[i].img= 'https://p0.meituan.net/128.180' + coming[i].img.slice(25)

      }
      // console.log(coming)
      this.setState({
        coming:coming
      })
    }).catch(err =>{console.log(err)})
  }
  render() {
    // let coming = this.state.coming
    let arry =[
      {
      img:'https://p0.meituan.net/170.230/movie/ae98a8b942495de97ddde12170f9b38d92428.jpg',
      want: 295368,
      name: '摸金校尉',
      date: '10月1日'
      },
      {
        img:'https://p0.meituan.net/170.230/movie/3f91c6e2570190251e9cbf4a56deaf8a1797360.jpg',
        want: 295368,
        name: '使徒行者',
        date: '8月9日'
        },
        {
          img:'https://p0.meituan.net/170.230/movie/bb9f75599bfbb2c4cf77ad9abae1b95c1376927.jpg',
          want: 295368,
          name: '银河补习班',
          date: '7月18日'
          },
          {
            img:'https://p1.meituan.net/170.230/movie/74368fecd16f25a7e632e13447f217c0298371.jpg',
            want: 295368,
            name: '沉默的证人',
            date: '8月2日'
            },
    
  
    ]
     let items = arry.map(item =>(
      <div className="expected-item"  key={item.img}>
      <div className="poster default-img-bg">
        <img src={item.img} alt=''/>
        <span className="wish-bg"></span>
        <span className="wish"><span className="wish-num">{item.want}</span>人想看</span>
        <div className="toggle-wish" data-wishst="0" data-movieid="1203134">
         <span></span>
        </div>
       </div>
    <h5 className="name line-ellipsis">{item.name}</h5>
    <p className="date">{item.date}</p>
  </div>
       
     ))
     
     console.log(items)
    return (
      <Scroll onScroll={() => { }} refresh={true}>
      <div className='most-expected'>
       <p className="title">近期最受期待</p>
       <div className="most-expected-list">
            {
               items
            }
       </div>
       <Movielist coming={this.state.coming}></Movielist>
      </div>
      </Scroll>
    );
  }
}

export default New;