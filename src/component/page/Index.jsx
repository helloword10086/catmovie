import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect,NavLink} from 'react-router-dom'
import Recommed from './recommed'
import  New from './New'
class Index extends Component {
  onsearch =() =>{
    this.props.history.push('/search')
  }
  render() {
    return (
      <div>
         <div className="nav">
              <div className="adress">北京</div>
              <NavLink to='/index/recommend'>正在热映</NavLink>
              <NavLink to='/index/new'>即将上映</NavLink>
              <div className='search' onClick={this.onsearch}></div>
          </div>
          {/* <Route exact path='/index/' component ={Recommed}></Route> */}
          <Route  path='/index/new' component ={New}></Route>
          <Route  path='/index/recommend' component ={Recommed}></Route>
      </div>
    );
  }
}

export default Index;