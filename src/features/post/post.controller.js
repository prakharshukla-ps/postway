import ApplicationError from "../../errorHandler/applicationError.js";
import paginate from "../../paginate/paginate.js";
import PostModel from "./post.model.js";

export default class PostController {
  getAllPosts(req, res) {
    const { content, page, limit } = req.query;

    let allPosts = PostModel.getAllPosts();

    if (content) {
      allPosts = PostModel.getAllFilteredPosts(content);
    }

    const result = paginate(allPosts, page, limit);

    res.status(200).send(result);
  }

  getPostById(req, res) {
    const postId = req.params.id;
    const post = PostModel.getPostById(postId);

    if (!post) {
      throw new ApplicationError("Post not found!", 404);
    }
    return res.status(200).send(post);
  }

  getUserPosts(req, res) {
    const userId = req.userId;
    const allPosts = PostModel.getUserPosts(userId);
    const result = paginate(allPosts, req.query.page, req.query.limit);
    res.status(200).send(result);
  }

  createNewPost(req, res) {
    const userId = req.userId;
    const { caption } = req.body;
    const imageUrl = req.file.filename;

    const newPost = PostModel.createNewPost(userId, caption, imageUrl);

    res.status(201).send(newPost);
  }

  updatePost(req, res) {
    const userId = req.userId;
    const postId = req.params.id;
    const { caption } = req.body;
    const imageUrl = req.file.filename;

    const updatedPost = PostModel.updatePost(userId, postId, caption, imageUrl);

    if (!updatedPost) {
      throw new ApplicationError("Post not found!", 404);
    }

    res.status(200).send(updatedPost);
  }

  deletePost(req, res) {
    const userId = req.userId;
    const postId = req.params.id;

    const deletedPost = PostModel.deletePost(userId, postId);

    if (!deletedPost) {
      throw new ApplicationError("Post not found!", 404);
    }

    return res.status(200).send(deletedPost);
  }

  getAllFilteredPosts(req, res) {
    const { content } = req.query;
    const allFilteredPosts = PostModel.getAllFilteredPosts(content);
    const result = paginate(allFilteredPosts, req.query.page, req.query.limit);
    res.status(200).send(result);
  }
}
