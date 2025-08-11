import paginate from "../../paginate/paginate.js";
import CommentModel from "./comment.model.js";

export default class CommentController {
  getAllComments(req, res) {
    const postId = req.params.id;
    const allComments = CommentModel.getAllComments(postId);
    const result = paginate(allComments, req.query.page, req.query.limit);
    res.status(200).send(result);
  }

  addNewComment(req, res) {
    const userId = req.userId;
    const postId = req.params.id;
    const { content } = req.body;

    const newComment = CommentModel.addNewComment(userId, postId, content);

    res.status(201).send(newComment);
  }

  updateComment(req, res) {
    const userId = req.userId;
    const commentId = req.params.id;
    const { content } = req.body;

    const updatedComment = CommentModel.updateComment(
      commentId,
      userId,
      content
    );

    if (!updatedComment) {
      throw new ApplicationError("Comment not found!", 404);
    }

    res.status(200).send(updatedComment);
  }

  deleteComment(req, res) {
    const userId = req.userId;
    const commentId = req.params.id;

    const deletedComment = CommentModel.deleteComment(commentId, userId);

    if (!deletedComment) {
      throw new ApplicationError("Comment not found!", 404);
    }

    return res.status(200).send(deletedComment);
  }
}
