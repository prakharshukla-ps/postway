import paginate from "../../paginate/paginate.js";
import LikeModel from "./like.model.js";

export default class LikeController {
  getAllLikes(req, res) {
    const postId = req.params.id;
    const allLikes = LikeModel.getAllLikes(postId);
    const result = paginate(allLikes, req.query.page, req.query.limit);
    res.status(200).send(result);
  }

  toggleLike(req, res) {
    const userId = req.userId;
    const postId = req.params.id;
    const message = LikeModel.toggleLike(postId, userId);
    res.status(200).send(message);
  }
}
