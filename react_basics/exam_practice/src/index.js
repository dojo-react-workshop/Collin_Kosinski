import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
       
    }
    logFormValue = (value) =>{
        console.log(value)
    }
    render() {
        return (
            <div>
                <h1> Bootcamp Repo App </h1>
                <Form  passStateToApp={this.logFormValue}/>
            </div>
        )
    }

}

class Form extends React.Component {
    
     state = {
            repo_name: '',
            description: '',
            nameValidation: '',
            submitFlag: false
        }
    handleChange = (event) =>{
        const name =event.target.name
        const value = event.target.value
            this.setState({
                [name]: value
            })
        if(name === 'repo_name') {
            if(value.length >= 1 && value.length <= 100){
                    this.setState({
                        nameValidation: '',
                        submitFlag: true
                    });
            }else{
                this.setState({
                    nameValidation: 'invalid length',
                    submitFlag: false
                });
            }
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.submitFlag){
            this.props.passStateToApp(this.state.repo_name); 
            this.props.passStateToApp(this.state.description);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="repo_name" placeholder="Repo Name" onChange={this.handleChange} value={this.state.value}/>
                    <p> {this.state.nameValidation} </p>
                    <input type="textarea" name="description" placeholder="description" onChange={this.handleChange} value={this.state.value}/>                    
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

