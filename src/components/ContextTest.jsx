import React, { useContext } from 'react';

// 1.创建上下文
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

function Child(prop) {
    return (<div>Child1:{prop.foo}</div>);
}

// 2.使用hook消费
function Child2() {
    const ctx = useContext(MyContext);
    console.log(ctx,'------------')
    return (<div>Child2:{ctx.foo}</div>);
}

// 3.使用class指定静态contextType
class Child3 extends React.Component{
    static contextType = MyContext;
    render(){
        console.log(this.context,'++++++++++++++++')
        return <div>Child3: {this.context.foo}</div>
    }
};



export default function ContextTest() {
    return (
        <div>
            <Provider value={{ foo: 'bar' }} >
                {/* 使用,消费方方法1: Consumer */}
                <Consumer>
                    {value => <Child {...value} />}
                </Consumer>

                {/* 使用,消费方法2:hook */}
                <Child2 />
        
                {/* 使用,消费方法3:contextType */}
                <Child3 />
        
            </Provider>
        </div>
    )
}

