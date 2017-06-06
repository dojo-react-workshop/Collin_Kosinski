import React from 'react';
import ReactDOM from 'react-dom';
import { array } from 'prop-types';


const FormResults = (props) => {
    const tableRows = props.users.map((user) => {
        return (
            <tr key={user.id}>
                <td>{user.login}</td>
            </tr>
        )
    })
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th width="500">Users</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

FormResults.propTypes = {
    users: array.isRequired
}

export default FormResults;