import React from 'react';
import ReactDOM from 'react-dom';

const RouterResults = (props) => {
    const tableRows = props.repos.map((nameObj) => {
        console.log(nameObj.name)
        return(
             <tr key={nameObj.id}>
                <td>{nameObj.name}</td>
            </tr>
        )
    })
    return(
        <table className="table" >
            <thead>
                <tr>
                    <th width="500">Repo Name</th>
                </tr>
            </thead>
            <tbody>
                 {tableRows}
            </tbody>
        </table>
    )
}

export default RouterResults;