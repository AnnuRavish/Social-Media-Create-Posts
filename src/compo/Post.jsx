import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListStore } from "../store/Post-list-store";

const Post = ({ past }) => {
  const { deleteList } = useContext(PostListStore)

  return (

    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{past.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() =>
            deleteList(past.id)
          }
        >
          <AiFillDelete />

        </span>
        <p className="card-text">{past.body}</p>
        {past.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag ">{tag}</span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {past.reaction} people.
        </div>
      </div>
    </div>
  )
}





export default Post;