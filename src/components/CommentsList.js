import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <p className="comments_label">All comments ({comments?.length})</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
