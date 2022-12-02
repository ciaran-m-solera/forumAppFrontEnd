import { useParams, Link } from "react-router-dom";
import "./selected-forum-thread.css"
const forumData = require("../../forumData.json");
function getForumPost(tID) {
    return forumData.filter(
        function (forumData) {
            return forumData.threadID === tID
        }
    );
}


export default function SelectedForumThread() {

    let { threadID } = useParams();
    let threadData = getForumPost(threadID)
    return (
        <div className="select-forum-thread">
            <h1>{threadID}</h1>
            <Link to={"/forum/createpost"}>Create new post</Link>
            {threadData[0].threadPosts.map(post =>
                <div key={"div-" + post.postID}>
                    {post.postCategory} <Link to={"/forum/post/" + post.postID} key={post.postID}>{post.postName}</Link></div>)}
        </div>
    );
}