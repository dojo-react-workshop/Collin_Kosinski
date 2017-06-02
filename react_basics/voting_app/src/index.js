import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imagePath from './Image/plus.png';



class App extends React.Component {
    state = {
        library: [
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
                voteCount: 0}
        ]

    }
    

    updateVoteCount = (library) => {
        const newLibrary = this.state.library.map((libObj, index) => {
            if(libObj.language === library ){
                return{
                    ...libObj,
                    voteCount: libObj.voteCount +1
                }
            }
            return libObj;
        });

        this.setState({
            library: newLibrary.sort(( a,b ) => b.voteCount - a.voteCount)

        })
    }

    render() {
        return (
            <div className="header">
                <h1>Vote Your JS Library!</h1>
                <CountList library={this.state.library} onClick={this.updateVoteCount} />
            </div>
        )
    }
}


const CountList = (props) => {
    const library = props.library.map((counterObj, idx) => {
        return <Counter key={idx} language={counterObj.language} voteCount={counterObj.voteCount} onClick={props.onClick} />;
    });

    return (
        <div className="listContainer">
            {library}
        </div>
    );
}

const Counter = (props) => {
    const { language } = props;
    const { voteCount } = props;
    const handleClick = () =>{
        props.onClick(props.language)
    }

    return (
        <div className="counter">
            <p className="numberContainer">{voteCount}</p>
            <p className="language">{language}</p>
            <img src={imagePath} alt="plus sign" onClick={handleClick} />
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'));