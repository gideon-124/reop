import React, { Component } from 'react'
 
class UseClass extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Component Did Mount" + this.state.count)
 
    }
    componentDidUpdate(preprops, prestate) {
        console.log('Component Did Update' + this.state.count)
 
    }
 
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>Click Here</button>
 
            </div>
        )
    }
}  

export default UseClass