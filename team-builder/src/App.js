import React, { useState } from 'react'
import './App.css'

import Form from './components/Form'

function App() {

    const [teamMembers, setTeamMembers] = useState([])

    return (
        <div className="App">
            <Form />
            team members
        </div>
    )
}

export default App
