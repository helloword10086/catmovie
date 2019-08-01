import React, { Component } from 'react';
import '../style/mine.css'
class Mine extends Component {
  render() {
    return (
      <div>
      <div className="my-login">
           <input type="text" className='my-phone' placeholder='手机号'/>
           <input type="text" className='my-passwd' placeholder='密码'/>
      </div>
           <div type="submit"  className="submit">登录</div>
           </div>
    );
  }
}

export default Mine;