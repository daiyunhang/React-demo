import React, { Component } from 'react'

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    { body: "react is very good", author: "facebook" },
                    { body: "vue is very good", author: "youyuxi" }
                ]
            })
        }, 1000);
    }


    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                    <Comment key={i} {...c} />
                ))}
                {/* {this.state.comments.map((c,i)=>{
                    <Comment key={i} data={c} />
                })} */}
            </div>
        )
    }
}

//展示组件
/*
// 方式1
class Comment extends React.Component {
    shouldComponentUpdate(nextProps){
        if(nextProps.data.body === this.props.data.body && nextProps.data.author === this.props.data.author){
            return false;
        }
        return true;
    }

    render() {
        console.log("asdasdas");

        return (
            <div>
                <p>{this.props.data.body}</p>
                <p> --- {this.props.data.author}</p>
            </div>
        )
    }
}
*/
/*
// 方式2
class Comment extends React.PureComponent {
    render() {
        console.log("asdasdas");

        return (
            <div>
                <p>{this.props.body}</p>
                <p> --- {this.props.author}</p>
            </div>
        )
    }
}
*/
// react 16.6以后可以使用这个方式
const Comment = React.memo(function(props) {
        console.log("asdasdas");
        return (
            <div>
                <p>{props.body}</p>
                <p> --- {props.author}</p>
            </div>
        )
    }
)

/*
function Comment({ props }){
    console.log("asdasdas");

    return (
        <div>
            <p>{props.body}</p>
            <p> --- {props.author}</p>
        </div>
    )
}
*/