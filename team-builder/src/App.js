import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'

function App() {

    const [teamMembers, setTeamMembers] = useState([])

    function addTeamMember(member) {
        setTeamMembers([...teamMembers, member])
    }

    return (
        <div className="App">
            <Form addTeamMember={addTeamMember} />
            team members
        </div>
    )
}

export default App
