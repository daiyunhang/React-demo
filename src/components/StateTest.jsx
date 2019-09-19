import React, { Component } from 'react'

export default class StateTest extends Component {
    state = {
        counter: 1
    }

    componentDidMount(){
        // this.setState({
        //     counter: this.state.counter += 1
        // })
        this.setState(prevState =>({
            counter: prevState.counter += 1
        }))
        
    }





    render() {
        return (
            <div>
                {this.state.counter}        
            </div>
        )
    }
}
