export default class CommentModel {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }

  static getAllComments(postId) {
    const allComments = comments.filter((comment) => comment.postId == postId);
    return allComments;
  }

  static addNewComment(userId, postId, content) {
    const newComment = new CommentModel(
      comments.length + 1,
      userId,
      postId,
      content
    );
    comments.push(newComment);
    return newComment;
  }

  static updateComment(commentId, userId, content) {
    const comment = comments.find(
      (comment) => comment.id == commentId && comment.userId == userId
    );

    if (!comment) {
      return null;
    }

    if (content !== undefined && content.trim() !== "") {
      comment.content = content;
    }

    return comment;
  }

  static deleteComment(commentId, userId) {
    const commentIndex = comments.findIndex(
      (comment) => comment.id == commentId && comment.userId == userId
    );

    if (commentIndex == -1) {
      return null;
    }

    const deletedComment = comments.splice(commentIndex, 1)[0];
    return deletedComment;
  }
}

const comments = [
  new CommentModel(1, 2, 1, "Wow! That looks amazing!"),
  new CommentModel(2, 3, 1, "I wish I could be there right now."),
  new CommentModel(3, 1, 2, "Great run! How long did it take?"),
  new CommentModel(4, 4, 3, "That pizza looks delicious 🍕"),
  new CommentModel(5, 5, 4, "The view from the mountain is breathtaking!"),
];
