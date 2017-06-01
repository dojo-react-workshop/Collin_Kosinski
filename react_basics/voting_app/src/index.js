import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imagePath from './Image/plus.png';


const App = (props) => {
    const library = [
    {
        language: 'React',

    },
    {
        language: 'Vue',

    },
    {
        language: 'Angular',

    },
    {
        language: 'Ember'

    }
];
        return(
            <div className="header">
                <h1>Vote Your JS Library!</h1>
                <CountList library={library} />
            </div>
        )
    }


const CountList = (props) => {
    const library = props.library.map((counterObj, idx) => {
             return <Counter key={idx} language={counterObj.language}/>;
    });

    return(
        <div className="listContainer">
            {library}
        </div>
    );
}

const Counter = (props) => {
    const {language} = props;
        return (
            <div className="counter">
                <p className="numberContainer"></p>
                <p className="language">{language}</p>   
                <img src={imagePath} alt="plus sign" />  
            </div>
        )
    }


ReactDOM.render(<App d />, document.getElementById('root'));