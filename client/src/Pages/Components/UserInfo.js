export default function UserInfo({ _id, username, email, number, color }) {
    return (
        <div className="content">
            <p><a className="user">{username}</a></p>
            <a className="email">{email}</a>
            <a className="number">{number}</a>
            <a className="color">{color}</a>
        </div>
    );
};