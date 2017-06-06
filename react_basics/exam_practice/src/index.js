import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo_name: '',
            description: ''
        }
    }
    render() {
        return (
            <div>
                <h1> Bootcamp Repo App </h1>
                <Form />
            </div>
        )
    }

}

class Form extends React.Component {
    constructor(props) {
        super(props);

    }
    onHandle = (event) =>{
        const name =event.target.name
        const value = event.target.value
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="repo_name" placeholder="Repo Name" onChange={this.onHandle}/>
                    <input type="textarea" name="description" placeholder="description" onChange={this.onHandle}/>                    
                    <input type="submit" name="submit" placeholder="Submit" />
                </form>
            </div>
        )
    }
}

const FormResults = () => {
    return null
}

const RouterResults = () => {
    return null
}

ReactDOM.render(<App />, document.getElementById('root'));

