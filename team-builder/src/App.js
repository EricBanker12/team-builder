import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Member from './components/Member'

function App() {

    const [teamMembers, setTeamMembers] = useState([])
    const [memberToEdit, setMemberToEdit] = useState()

    function addTeamMember(member) {
        setTeamMembers([...teamMembers, member])
    }

    function editTeamMember(member) {
        setMemberToEdit(member)
    }

    return (
        <div className="App">
            <Form addTeamMember={addTeamMember} editTeamMember={editTeamMember} memberToEdit={memberToEdit}/>
            <div>
                {teamMembers.map((e,i)=><Member key={i} data={e} editTeamMember={editTeamMember} />)}
            </div>
        </div>
    )
}

export default App
