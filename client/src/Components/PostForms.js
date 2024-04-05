import { useState } from 'react';

export default function PostForms() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('');


    async function send_post(ev) {
        ev.preventDefault();

        const res = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: JSON.stringify({ username, email, number, password, color }),
            //Since the body is a JSON, we need to set some headers
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.status === 200) {
            alert('Registration was successful.')
        } else {
            alert('Registration failed.')
        }

    };

    return (
        <form onSubmit={send_post}>
            <input type="text" placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />

            <input type="email" placeholder="email"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />

            <input type="number" placeholder="number"
                value={number}
                onChange={ev => setNumber(ev.target.value)} />

            <input type="password" placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />

            <input type="color" placeholder="color"
                value={color}
                onChange={ev => setColor(ev.target.value)} />

            <button>Submit</button>

        </form>
    );
}