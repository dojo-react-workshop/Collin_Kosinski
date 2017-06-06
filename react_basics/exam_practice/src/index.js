import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div>
            <h1> Bootcamp Repo App </h1>
            <Form />
        </div>
    )
}

const Form = () => {
    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="name" />
                <input type="submit" name="submit" placeholder="Submit" />
             </form>
        </div>
    )
}

const FormResults = () => {
    return null 
}

const RouterResults = () => {
    return null
}

ReactDOM.render(<App />, document.getElementById('root'));

