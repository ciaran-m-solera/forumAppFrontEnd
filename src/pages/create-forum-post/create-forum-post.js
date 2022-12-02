import "./create-forum-post.css"
import ForumApi from "../../service/ForumApi";
export default function CreateForumPost() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.postTitle.value);
    ForumApi.postForumPost(event.target.postTitle.value);
  }
  return (
    <div className="create-forum-post-page">
      <h1>Forum Post</h1>
      <div >
        <form onSubmit={handleSubmit} className="create-post-form">
          <label htmlFor="postTitle">Post Title:</label>
          <input id="postTitle" type="text" required></input>
          <label htmlFor="postText">Post Text:</label>
          <input id="postText" type="text" required></input>
          <label htmlFor="postCategory">Post Category:</label>
          <select id="postCategory">
            <option value="doubt">Doubt</option>
            <option value="suggestion">Suggestion</option>
            <option value="clarification">Clarification</option>
          </select>
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}