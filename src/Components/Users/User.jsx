import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const goback = useNavigate();
    const handleGoBack = () =>{
        goback(-1)
    }

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}><button to={`/user/${id}`}>Show details</button></Link>
            <button onClick={handleGoBack}>Back</button>
            

        </div>
    );
};

export default User;