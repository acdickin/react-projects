import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { Post } from "./Post";


const CreatePost = () => {
  const [title, setTitle] = useState<String>("");
  const [body, setBody] = useState<String>("");

  const mutation = useMutation((newPost) => axios.post("https://jsonplaceholder.typicode.com/posts", newPost));

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post submitted!</span>;
  }

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <button onClick={submitData}>Submit</button>
    </div>
  );
};