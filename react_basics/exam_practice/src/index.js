import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userData from './users.json';
import repos from './repos.json';



ReactDOM.render(<App repos={repos} users={userData.items}/>, document.getElementById('root'));

