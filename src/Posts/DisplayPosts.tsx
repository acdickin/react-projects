import { useQuery } from "react-query";
import axios from "axios";
import { Post } from "./Post";

const retrievePosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const DisplayPosts = () => {
  const { data: posts, error, isLoading } = useQuery("postsData", retrievePosts);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <ul>
      {posts.map(({ id, title }: Post)=> (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default DisplayPosts;