import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1)
    }
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post ID:{id}</h2>
            <p>Title:{title}</p>
            <p>{body}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default PostDetails;