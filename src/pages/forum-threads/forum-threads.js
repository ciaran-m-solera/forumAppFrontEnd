import "./forum-thread-page.css"
import { Link } from "react-router-dom";
const forumData = require("../../forumData.json");
export default function ForumThreads() {
    return (
        <div className="forum-threads-page">
            <h1>Threads</h1>
            {forumData.map(thread =>
                <div key={"div-"+thread.threadID}>
                    <Link to={"/forum/thread/" + thread.threadID} key={thread.threadID}>{thread.threadName}</Link>
                </div>)}
        </div>
    );
}