import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
// import logo from './logo.svg';
// import Recommed from './component/page/recommed'
// import  New from './component/page/New'
import Index from './component/page/Index'
import Center from './component/page/Center'
import Mine from './component/page/Mine'
import Detail from './component/page/Detail'
import Detailcinem from './component/page/Detailcinem'
import Search from './component/page/Search'
import './App.css';
import {getmovielist} from './api/movielist'


  class App extends React.Component {
   
    render(){

      return (
       <Router>
         <div className="container">
           <div className="header">
            <div className="title-mao">猫眼电影</div>
            {/* <div className="nav">
              <div className="adress">北京</div>
              <NavLink to='/recommend'>正在热映</NavLink>
              <NavLink to='/new'>即将上映</NavLink>
              <div className='search'></div>
            </div> */}

            <Switch>
                <Route path='/search' component = {Search}></Route>
                <Route path='/cinema/:id' component = {Detailcinem}></Route>
                <Route path='/detail' component ={Detail} ></Route>
                {/* <Route  path='/' component ={Index}></Route> */}
                <Route  path='/index' component ={Index}></Route>
                <Route  path='/center' component ={Center}></Route>
                <Route  path='/mine' component ={Mine}></Route>
                <Redirect from='/' to='/index/recommend'></Redirect>
                {/* <Route exact path='/' component ={Recommed}></Route>
                <Route  path='/new' component ={New}></Route>
                <Route  path='/recommend' component ={Recommed}></Route> */}
            </Switch>
            <div className="foot-tabbar">
              <div className="tabbar-flex">

                <NavLink to='/index/recommend'>
                  <img src={require("./comm/image/movie.png")} alt=""/>
                  <div className="tabbar-name">电影</div>
                </NavLink>
                <NavLink to='/center' > 
                  <img src={require("./comm/image/yuan.png")} alt=""/>
                  <div className="tabbar-name">影院</div>
                </NavLink >
                <NavLink to='/mine'>
                  <img src={require("./comm/image/pople1.png")} alt=""/>
                  <div className="tabbar-name">我的</div>
                </NavLink>
              </div>
            </div>
           </div>
          
         </div>
       </Router>
      );
    }
}

export default App;
