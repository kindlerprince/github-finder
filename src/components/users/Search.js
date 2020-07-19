import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes = {
        SearchUsers: PropTypes.func.isRequired,
        clearUser : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired
    }
    state= {text:""}
    onSubmit = (e) =>{
        e.preventDefault();
        // this prop has different flow
        this.props.SearchUsers(this.state.text)
        this.setState({text:""})
    }

    //it may be a good method of assigning a state variable
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search Users..." />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {this.props.showClear && 
                <button className="btn btn-light btn-block" onClick={this.props.clearUser}>
                    Clear
                </button>
                }
            </div>
        )
    }
}
