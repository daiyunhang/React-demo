import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/user.redux';

// 首页
function Home() {
    return <div>
        <h3>课程列表</h3>
        <ul>
            <li><Link to="/detail/web">Web架构师</Link></li>
            <li><Link to="/detail/python">Python架构师</Link></li>
        </ul>
    </div>
}
// 关于我们
function About() {
    return <div>
        <h3>个人中心</h3>
        <div>
            <Link to="/about/me">个人信息</Link>
            <Link to="/about/order">订单查询</Link>
        </div>
        <Switch>
            <Route path="/about/me" component={() => (<div>Me</div>)} />
            <Route path="/about/order" component={() => (<div>Order</div>)} />
            <Redirect to="/about/me" />
        </Switch>
    </div>
}
// 404
function NoMatch({ location }) {
    return <div>404,{location.pathname}不存在</div>
}
// 传递进来路由器对象
function Detail(props) {
    // 1.history: 导航指令
    // 2.match: 获取参数信息
    // 3.location: 当前url信息
    console.log(props, '--------------');
    return <div>
        当前课程是:{props.match.params.course}
        <button onClick={props.history.goBack}>后退</button>
    </div>
}

// 路由守卫 -- 高阶组件
// 希望用法: <PrivateRoute component={about} path="/about" ... >
const PrivateRoute = connect(state => ({ isLogin: state.user.isLogin }))(
    ({ component: Comp, isLogin, ...rest }) => {
        // 做认证
        // render: 根据条件动态渲染组件
        return (
            <Route {...rest}
                render={props =>
                    isLogin ? (
                        <Comp />
                    ) : (
                            <Redirect to={{
                                pathname: "/login",
                                state: { redirect: props.location.pathname }
                            }}
                            />
                        )
                } />
        )
    })


// 登录组件
const Login = connect(
    state => ({
        isLogin: state.user.isLogin,
        loading: state.user.loading
    }), { login })(
        ({ location, isLogin, login, loading }) => {
            const redirect = location.state.redirect || '/';
            if (isLogin) {
                return <Redirect to={redirect} />;
            };
            return (
                <div>
                    <p>用户登录</p>
                    <hr />
                    <button onClick={login} disabled={loading}>
                        {loading?"登录中...":"登录"}
                    </button>
                </div>
            )
        }
    )


export default function RouteSample() {
    return <div>
        <BrowserRouter>
            <div>
                {/* 路由导航 */}
                <ul className="nav">
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li>
                        <Link to="/about">关于我们</Link>
                    </li>
                </ul>
                {/* 路由的配置:路由即组件 */}
                {/* 路由匹配默认是包容性质 */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:course" component={Detail} />
                    <PrivateRoute path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    {/* 404: 没有path,必然匹配 */}
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}