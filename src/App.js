import React from 'react';
import User from './components/users/Users';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import './App.css'
import Search from './components/users/Search';

// class based component
class App extends React.Component {
  state = { isLoading : false, users : [] }
  
  /*async componentDidMount(){
    this.setState({isLoading : true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data, isLoading : false})
  }*/

  // the prop search in Search.js is passing this parameter
  searchUser = async ( text) =>{
    this.setState({isLoading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users : res.data.items, isLoading : false})
  }

  clearUser = () => {
    this.setState({users:[], isLoading: false})
  }
  render(){
  return (
    <div className="App">
      <Navbar/>
      <Search SearchUsers={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length > 0 ? true:false}/>
      <div className="container">
        <User loading = {this.state.isLoading} users={this.state.users}/>

      </div>
    </div>
  );
  }
}

export default App;
