import { useState } from 'react';

export default function DeleteForms() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function send_delete(ev) {
        ev.preventDefault();

        const res = await fetch('http://localhost:4000/delete', {
            method: 'DELETE',
            body: JSON.stringify({ username, password }),
            //Since the body is a JSON, we need to set some headers
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.status === 200) {
            alert('User deleted successfully.')
        } else {
            alert('User deletion failed.')
        }
    };

    return (
        <form onSubmit={send_delete}>
            <input type="text" placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />

            <input type="password" placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />

            <button>Submit</button>

        </form>
    );
}