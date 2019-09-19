import React, { Component } from 'react';
// import { Welcome1, Welcome2 } from './components/CompType'
// import Clock from './components/Clock'
// import StateTest from './components/StateTest';
// import CartSample from './components/CartSample';
// import AntdTest from './components/AntdTest';
// import CommentList from './components/CommentList';
// import Hoc from './components/Hoc';
// import Componsition from './components/Componsition';
import HookTest from './components/HookTest';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

export default class App extends Component {

  render() {
    // const name = 'query'
    // const user = { firstName: "aaa", lastName: "bbb" }
    return (
      <div>
        {/* 表达式*/}
        {/* <h1>{name}</h1> */}
        {/* <h1>{formatName(user)}</h1> */}

        {/* <Welcome1 name="some content"></Welcome1> */}
        {/* <Welcome2 name="asd"></Welcome2> */}

        {/* State和状态改变setState */}
        {/* <Clock></Clock> */}

        {/* <StateTest></StateTest> */}

        {/* 关于渲染 */}
        {/* <CartSample></CartSample>   */}

        {/* antd */}
        {/* <AntdTest></AntdTest> */}

        {/* 展示组件和容器组件 */}
        {/* <CommentList></CommentList> */}

        {/* 高阶组件 */}
        {/* <Hoc></Hoc> */}

        {/* <Componsition></Componsition> */}

        <HookTest></HookTest>
      </div>
    )
  }
}