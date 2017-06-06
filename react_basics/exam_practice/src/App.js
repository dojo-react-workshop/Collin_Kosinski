import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Form from './Form';
import FormResults from './FormResults';
import RouterResults from './RouterResults';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }
    }
      logFormValue = (value) => {
        console.log(value)
       return axios.get(`https://api.github.com/search/users?q=${value}`)
        .then((response) =>{
            this.setState({
                users:response.data.items
            })
        })
        .catch((err) => {
            console.log(err)
        })

    }
    render() {
         const { users, repos } = this.props;
        return (
            <div className="App">
                <h1> Bootcamp Repo App </h1>
                <Form passStateToApp={this.logFormValue} />
                <FormResults users={this.state.users} />
                <RouterResults repos={repos} />
            </div>
        )
    }

}




export default App;