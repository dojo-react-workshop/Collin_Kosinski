import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component {

    state = {
        repo_name: '',
        nameValidation: '',
        submitFlag: false
    }
    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
        if (name === 'repo_name') {
            if (value.length >= 1 && value.length <= 100) {
                this.setState({
                    nameValidation: '',
                    submitFlag: true
                });
            } else {
                this.setState({
                    nameValidation: 'invalid length',
                    submitFlag: false
                });
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.submitFlag) {
            this.props.passStateToApp(this.state.repo_name);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="repo_name" placeholder="Repo Name" onChange={this.handleChange} value={this.state.value} />
                    <p> {this.state.nameValidation} </p>
                    <input type="submit" name="submit" placeholder="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;