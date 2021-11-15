import React from "react";

// Mounting
// class App extends React.Component {
//   constructor(props) {
//     console.log('step 1) constructor')
//     super(props);
//     this.state = {
//         counter: 0,
//     }
//   }

//   componentDidMount() {
//     console.log('step 3) componentDidMount')
//     this.setState({counter: 100})
//   }

//   render() {
//     console.log('step 2) render')
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button type="button" onClick={() =>
//             this.setState({counter: this.state.counter + 1}) }
//         >เพิ่ม</button>
//       </div>
//     );
//   }
// }

// // Updating
// class App extends React.Component {
//   constructor(props) {
//     console.log("step 1) constructor");
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }
//   componentDidMount() {
//     console.log("step 3) componentDidMount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("step 4) componentDidMount");
//     console.log("prevProps", prevProps, "prevState", prevState);
//   }

//   render() {
//     console.log("step 2) render");
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button
//           type="button"
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           เพิ่ม
//         </button>
//       </div>
//     );
//   }
// }

// Unmounting
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isShow: true
    }
  }
  
  render() {
    return (
      <div>
        <h1>ParentComponent</h1>

        <div>
          {this.state.isShow ? <ChildComponent /> : null}

          <button type="button" onClick={() =>
            this.setState({isShow: !this.state.isShow}) }
          >
            {this.state.isShow ? 'delete' : 'show'}
          </button>
        </div>
      </div>
    );
  }
}
class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <h1>ChildComponant นะจ๊ะ</h1>
      </div>
    );
  }
}

export default App;
