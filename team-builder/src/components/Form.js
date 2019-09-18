import React, { useState } from 'react'

function Form() {

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        role: ''
    })

    return (
        <form>
            <label>Name: <input type='text' /></label>
            <label>Email: <input type='email' /></label>
            <label>Role: <input type='text' /></label>
            <input type='submit' />
        </form>
    )
}

export default Form