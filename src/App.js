import React from 'react';
import User from './components/users/Users';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css'

// class based component
class App extends React.Component {
  state = { isLoading : false, users : [] }
  
  async componentDidMount(){
    this.setState({isLoading : true});
    const res = await axios.get('https://api.github.com/users')
    this.setState({users : res.data, isLoading : false})
  }

  render(){
  return (
    <div className="App">
      <Navbar/>
      {/* {this.state.isLoading ? <h1>Hello World </h1> : <h1>{this.name()}</h1> } */}
      <div className="container">
        <User loading = {this.state.isLoading} users={this.state.users}/>

      </div>
    </div>
  );
  }
}

export default App;
