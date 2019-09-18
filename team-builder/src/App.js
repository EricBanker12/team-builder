import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Member from './components/Member'

function App() {

    const [teamMembers, setTeamMembers] = useState([])

    function addTeamMember(member) {
        setTeamMembers([...teamMembers, member])
    }

    function editTeamMember(member) {
        // to do
    }

    return (
        <div className="App">
            <Form addTeamMember={addTeamMember} />
            <div>
                {teamMembers.map((e,i)=><Member key={i} data={e} editTeamMember={editTeamMember} />)}
            </div>
        </div>
    )
}

export default App
