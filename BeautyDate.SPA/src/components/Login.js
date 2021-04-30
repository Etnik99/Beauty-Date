import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:3001/users/signin', { username: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }

    return (
        <div className="" >
            <div >
                <div className="fullName" >
                    <label htmlFor="username">Username</label>
                    <input type="text" {...username} autoComplete="new-password"></input>
                </div>
                <div className="fullName" >
                    <label htmlFor="password">Password</label>
                    <input type="password" {...password} autoComplete="new-password"></input>
                </div>
                <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} />
            </div>
        </div>
    );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default Login;