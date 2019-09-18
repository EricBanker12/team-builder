import React from 'react'

function Member(props) {
    return (
        <div>
            <h3>{props.data.name}</h3>
            <p>{props.data.email}</p>
            <p>{props.data.role}</p>
            <button onClick={()=>{props.editTeamMember(props.data)}}>Edit</button>
        </div>
    )
}

export default Member