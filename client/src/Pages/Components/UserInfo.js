export default function UserInfo({ _id, username, email, number, color }) {
    return (

        <div className="content">
            <p className="user">Usuário: {username}</p>
            <p className="email">Email: {email}</p>
            <p className="number">Número favorito: {number}</p>
            <p className="color" >Cor favorita: <a style={{ color: color }}>{color}</a></p>
        </div>



    );
};