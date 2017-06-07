import React from 'react';
import ReactDOM from 'react-dom';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';


const FormResults = (props) => {
    const tableRows = props.users.map((user) => {
        return (
            <tr key={user.id}>
                 <td><Link onClick={() => props.onClick(user.login)} to={`/${user.login}/repos`}>{user.login}</Link></td>
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