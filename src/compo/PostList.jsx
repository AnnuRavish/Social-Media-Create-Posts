import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListStore } from "../store/Post-list-store";
import Welcome from "./Welcome";
import FetchingMessage from "./Fetching";


const PostList = () => {
  const { postListener, addInList } = useContext(PostListStore)
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInList(data.posts)

        setFetching(false)
      });

  }, []);



  return (
    <>
      {fetching && <FetchingMessage></FetchingMessage>}
      {!fetching && postListener.length === 0 && (
        <Welcome />
      )}
      {!fetching && postListener.map((past) => (
        <Post key={past.id} past={past} />
      ))}

    </>
  )
}

export default PostList;