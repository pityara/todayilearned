export const getPostData = (posts, id) => {
  let title, text;
  (posts[id]) ?
    {title, text} = posts[id] :
    {title, text} = { title: "Post not found", text: "Please check url" };
  return {
    title,
    text
  }
};