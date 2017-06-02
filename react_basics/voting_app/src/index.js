import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imagePath from './Image/plus.png';

const library = [
    {
        language: 'React',
        voteCount: 0
    },
    {
        language: 'Vue',
        voteCount: 0
        
        
    },
    {
        language: 'Angular',
        voteCount: 0
        

    },
    {
        language: 'Ember',
        voteCount: 0
    

    }
];

class App extends React.Component{
    state ={
        'voteCount': library.voteCount
    }

    updateVoteCount=(update) =>{
        this.setState(() =>{
            return(
           {'voteCount': this.voteCount +1}

            )
        })
    }
    render() {
        return (
            <div className="header">
                <h1>Vote Your JS Library!</h1>
                <CountList library={library} count={this.state.voteCount}/>
            </div>
        )
    }
}


const CountList = (props) => {
    const {count} = props.state.voteCount;
    console.log(props.count)
    const library = props.library.map((counterObj, idx) => {
        return <Counter key={idx} language={counterObj.language} voteCount={counterObj.voteCount} count={props.voteCount}/>;
    });

    return (
        <div className="listContainer">
            {library}
        </div>
    );
}

const Counter = (props) => {
    const { language } = props;
    const {voteCount}= props;
    const {count} = props;
    console.log(count)
    return (
        <div className="counter">
            <p className="numberContainer">{voteCount}</p>
            <p className="language">{language}</p>
            <img src={imagePath} alt="plus sign"  />
        </div>
    )
}




ReactDOM.render(<App  />, document.getElementById('root'));