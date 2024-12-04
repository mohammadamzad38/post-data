import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Userss.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Our Users:{users.length}</h1>
            <h2>My Fantastic Users</h2>
            <div className="users">
                {
                    users.map( user => <User key={users.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;