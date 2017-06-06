import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => (
    <Router>
        <div>
            <h1>Accounts</h1>
            <ul>
                <li><Link to="/netflix">Netflix</Link></li>
                <li><Link to="/zillowGroup">Zillow Group</Link></li>
                <li><Link to="/yahoo">Yahoo</Link></li>
                <li><Link to="/modusCreate">Modus Create</Link></li>
            </ul>
            
                <Route path="/:id" component={Child}/>
        </div>
    </Router>
)

const Child= ({match}) => (
    <div>
        <p>ID: {match.params.id}</p>
    </div>
)


ReactDOM.render(<ParamsExample />, document.getElementById('root'));

