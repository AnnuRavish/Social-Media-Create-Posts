import { createContext, useReducer } from "react";

export const PostListStore = createContext({
  postListener: [],
  addList: () => { },
  addInList: () => { },
  deleteList: () => { },
});





const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if (action.type === 'DeletePost') {
    newPostList = currPostList.filter(post => post.id !== action.PayLoad.pastId)
  } else if (action.type === 'AddInList') {
    newPostList = action.PayLoad.posts;
  }
  else if (action.type === 'AddPostList') {
    newPostList = [action.PayLoad, ...currPostList];
  }
  return newPostList;
}






const PostProvider = ({ children }) => {

  const [postListener, dispatchPostList] = useReducer(
    postListReducer, []

  );






  const addList = (userId, postTitle, postBody, reactions, hashtags) => {
    dispatchPostList({
      type: 'AddPostList',
      PayLoad: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: hashtags
      }
    })

  };

  const addInList = (posts) => {
    dispatchPostList({
      type: 'AddInList',
      PayLoad: {
        posts,
      }
    })

  };

  const deleteList = (pastId) => {
    dispatchPostList({
      type: 'DeletePost',
      PayLoad: {
        pastId,
      }
    })
  };


  return (<PostListStore.Provider value={{ postListener, addList, deleteList, addInList }}>
    {children}
  </PostListStore.Provider>)
}



export default PostProvider;