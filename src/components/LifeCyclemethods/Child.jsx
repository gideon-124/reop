import React, { Component } from 'react'

class Child extends Component {         


    constructor(props){ 
        super(props)  

        this.state={
            clss:"class"
        }  

        console.log(" child constructor ")

    }    

    static getDerivedStateFromProps(props,state){  

        console.log(" child getDerivedStateFromProps") 
        return null 
    }
     
    componentDidMount(){
        console.log(" child componentDidMount")
    } 


    shouldComponentUpdate(){
        console.log("shouldComponentUpdate child") 
        return true
    } 

    getSnapshotBeforeUpdate(prevProps, prevState){  
        console.log("getSnapshotBeforeUpdate child")
        return null
    } 

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate child")
    }

  render() {  

    console.log("render child")
    return (
      <div> 

        Child
      </div>
    )
  }
}

export default Child   



































// import React, { Component } from 'react';

// class Logger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Logger mounted'
//     };
//     console.log('Child constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('Child getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount() {
//     console.log('Child componentDidMount');
//   }

//   shouldComponentUpdate() {
//     console.log('Child shouldComponentUpdate');
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('Child getSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Child componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('Child componentWillUnmount');
//   }

//   render() {
//     console.log('Child render');
//     return (
//       <div style={{ border: '1px dashed gray', marginTop: 20 }}>
//         <h3>Child Logger: Count from parent = {this.props.count}</h3>
//       </div>
//     );
//   }
// }

// export default Logger;





