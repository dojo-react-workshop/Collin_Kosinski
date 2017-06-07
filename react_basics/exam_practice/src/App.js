import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form';
import FormResults from './FormResults';
import RouterResults from './RouterResults';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            repos: []
        }
    }
    logFormValue = (value) => {
        this.setState({
            repos: []
        })
        return axios.get(`https://api.github.com/search/users?q=${value}`)
            .then((response) => {
                this.setState({
                    users: response.data.items
                })
            })
            .catch((err) => {
                console.log(err)
            })

    }
    handleUserClick = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
    }
    render() {
        const { users, repos } = this.props;
        return (
            <Router>
                <div className="App">
                    <h1> Bootcamp Repo App </h1>
                    <Route path="/" render={(props) => {
                        return <Form {...props} passStateToApp={this.logFormValue} />
                    }}

                    />
                    <FormResults users={this.state.users} onClick={this.handleUserClick} />
                    <Route path="/:user/repos" render={(props) => {
                        if (this.state.users.length < 1) {
                            return <Redirect to="/" />
                        }
                       return <RouterResults repos={this.state.repos} />
                    }} />
                </div>
            </Router>
        )
    }

}




export default App;