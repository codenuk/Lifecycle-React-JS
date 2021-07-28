import React from 'react'


// Mounting
// class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props);
//     this.state = {
//         counter: 0,
//     }
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     this.setState({counter: 100})
//   }
  
//   render() {
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
//     console.log('constructor')
//     super(props);
//     this.state = {
//         counter: 0
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps, 'prevState', prevState )
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.counter}</h1>
//         <button type="button" onClick={() => this.setState({counter: this.state.counter + 1}) }>เพิ่ม</button>
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
        <h1>ChildComponant</h1>
      </div>
    );
  }
}

export default App;