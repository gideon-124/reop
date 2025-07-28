import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {         


    constructor(props){ 
        super(props)  

        this.state={
            clss:"class"
        }  

        console.log("constructor parent ")

    }    

    static getDerivedStateFromProps(props,state){  

        console.log("getDerivedStateFromProps aprent") 
        return null 
    }
     
    componentDidMount(){
        console.log("componentDidMount parent")
    }  

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate  parent") 
        return true
    } 

    getSnapshotBeforeUpdate(prevProps, prevState){  
        console.log("getSnapshotBeforeUpdate parent")
        return null
    } 

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate parent")
    }  


    change=()=>{
        this.setState({ 
            clss:"setClass"

        })
    }
  render() {  

    console.log("render parent")
    return (
      <div> 
 
        <div> Parent {this.state.clss}</div>   
        <button onClick={this.change}> click </button>
        <Child/>
      </div>
    )
  }
}

export default Parent    


// life cycle                                                             functional 
// mounting       
//  constructor ---state, called only once, bind event handlers,        useState     --- state inilaze
// render ---  takes props or state and shown on ui using jsx            return  
// static getDerivedStateFromProps (prevprops, prevState) ---    
// compoentDidmount --- called only once, used for api calls              useEffect 

// updating phase    
//  static getDerivedStateFromProps (prevprops, prevState) ---   
//  componentDidupdate  ----    
// should compoent update ---   called before re-rendering    
// getSnapShotbeforeUpdate  ---  capturing Dom, called right before the dom updation
// rendering 

// unmounting   
// componentwillUnmount--- removing of dom 







































// import React, { Component } from 'react';
// import Logger from './Child';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       showLogger: true
//     };
//     console.log('Parent constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('Parent getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount() {
//     console.log('Parent componentDidMount');
//   }

//   shouldComponentUpdate() {
//     console.log('Parent shouldComponentUpdate');
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('Parent getSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Parent componentDidUpdate');
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   toggleLogger = () => {
//     this.setState({ showLogger: !this.state.showLogger });
//   };

//   render() {
//     console.log('Parent render');
//     return (
//       <div>
//         <h2>Parent: Counter = {this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.toggleLogger}>
//           {this.state.showLogger ? 'Hide' : 'Show'} Logger
//         </button>

//         {this.state.showLogger && <Logger count={this.state.count} />}
//       </div>
//     );
//   }
// }

// export default Counter;
