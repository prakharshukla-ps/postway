export default class LikeModel {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }

  static getAllLikes(postId) {
    const allLikes = likes.filter((like) => like.postId == postId);
    return allLikes;
  }

  static toggleLike(postId, userId) {
    const likeIndex = likes.findIndex(
      (like) => like.postId == postId && like.userId == userId
    );

    if (likeIndex == -1) {
      const newLike = new LikeModel(likes.length + 1, userId, postId);
      likes.push(newLike);
      return "Post liked!";
    } else {
      likes.splice(likeIndex, 1);
      return "Post disliked!";
    }
  }
}

const likes = [
  new LikeModel(1, 1, 1),
  new LikeModel(2, 2, 1),
  new LikeModel(3, 3, 2),
  new LikeModel(4, 4, 3),
  new LikeModel(5, 5, 4),
  new LikeModel(6, 1, 5),
  new LikeModel(7, 2, 3),
  new LikeModel(8, 3, 4),
];
