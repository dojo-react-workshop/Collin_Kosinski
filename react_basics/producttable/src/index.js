import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Inputs />
                <SearchResults />
            </div>
        );
    }
}

const Inputs = (props) => {
    return (
        
            <form className="Inputs">
                <input type="text" name="searchbox" placeholder="Search..." />
                <p>
                    <input type="checkbox" name="stockFilter" />
                    {''}
                    Only show products in stock
                </p>
            </form>
    );
}

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <strong>Name</strong><strong>Price</strong>
            <ResultCategory />
        </div>
    );
}
const ResultCategory = (props) => {
    return (
        <div className="ResultCategory">
            <h4>Category Name </h4>
            <Result />
        </div>
    );
}
const Result = (props) => {
    return (
        <div className="Result">
            <p> Football </p>
        </div>
    );
}





ReactDOM.render(<App />, document.getElementById('root'));

