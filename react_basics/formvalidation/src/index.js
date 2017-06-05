import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Form extends React.Component{
    constructor(props){
        super(props)
            this.state = ({
                name: '',
                email: '',
                nameValidation: '',
                emailValidation: ''
            });
        }

onHandleName = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value,
    })
    this.onHandleNameBlur();
    
}
onHandleEmail= (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value,
    })
    this.onHandleEmailBlur();
    
}
onHandleNameBlur = (event) => {
    const name = this.state.name;
    if(name.length < 8)
     this.setState({
         nameValidation: 'Name is less than 8 characters',
     })
     else{
        this.setState({
            nameValidation: ''
        })
     }

}
onHandleEmailBlur = (event) => {
    const email = this.state.email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email))
     this.setState({
         emailValidation: 'This is not a valid email address',
     })
     else{
        this.setState({
            emailValidation: ''
        })
     }

}

// onHandleSubmit = (event) => {
//     event.preventDefault();
//     if(this.state.nameValidation == '' && this.state.emailValidation == '')
//     // then submit
//     // else
//     // dont sumbit
// }
    render(){
        return(
            <div>
                <h1> Validated Form </h1>

                <form onSubmit={this.onHandleSubmit}>
                    <input type="text" onChange={this.onHandleName} placeholder="Name" name="name" />
                    <p> {this.state.nameValidation} </p>
                    <input type="text" onChange={this.onHandleEmail} placeholder="Email" name="email" />
                    <p> {this.state.emailValidation} </p>
                    <input type="submit" name="submitbutton" />
                </form>
            </div>
        )

    }
}

ReactDOM.render(<Form />, document.getElementById('root'));

