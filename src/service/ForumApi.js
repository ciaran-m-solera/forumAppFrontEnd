import axios from "axios";

const url ="https://localhost:7143"

export default{
    postForumPost(postDetails){
        return axios.post(url+"/api/ForumPost",)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) =>{
            console.error(err);
        });
    }
}