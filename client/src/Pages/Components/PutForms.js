import { useState } from 'react';

export default function PutForms() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function send_put(ev) {
        ev.preventDefault();

        const res = await fetch('http://localhost:4000/put', {
            method: 'PUT',
            body: JSON.stringify({ username, email, password }),
            //Since the body is a JSON, we need to set some headers
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.status === 200) {
            alert('Email changed successfully.')
        } else {
            alert('Email changed failed.')
        }

    };

    return (
        <form onSubmit={send_put}>
            <input type="text" placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />

            <input type="email" placeholder="email"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />

            <input type="password" placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />

            <button>Submit</button>

        </form>
    );
}