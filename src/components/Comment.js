const Comment = ({ id, comment, user }) => {
  return (
    <div className="comment">
      <span className="comment__user">{user}</span>
      <p className="comment__text">{comment}</p>
    </div>
  );
};

export default Comment;
