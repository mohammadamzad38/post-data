import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;

    const goback = useNavigate();
    const handelGoBack = () =>{
        goback(-1);
    };

    const navigate = useNavigate();
    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div style={postStyle}>
            <p>Post ID:{id}</p>
            <p>Post Title:{title}</p>
            <button onClick={handleShowDetails}>Show more Details</button>
            <button onClick={handelGoBack}>Back</button>
        </div>
    );
};

export default Post;