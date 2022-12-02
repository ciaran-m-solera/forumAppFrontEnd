import { useParams } from "react-router-dom";
import "./selected-forum-post.css"
export default function SelectedForumPost() {
    let { postID } = useParams()
    return (
        <div className="forum-post">
            <h1>Forum Post</h1>
            <p>{postID}</p>
        </div>
    );
}