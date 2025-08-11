export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static createNewPost(userId, caption, imageUrl) {
    const newPost = new PostModel(posts.length + 1, userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }

  static getAllPosts() {
    return posts;
  }

  static getAllFilteredPosts(content) {
    const searchTerm = content.toLowerCase();

    const filteredPosts = posts.filter((post) =>
      post.caption.toLowerCase().includes(searchTerm)
    );

    return filteredPosts;
  }

  static getUserPosts(userId) {
    const userPosts = posts.filter((post) => post.userId == userId);
    return userPosts;
  }

  static getPostById(postId) {
    const post = posts.find((post) => post.id == postId) || null;
    return post;
  }

  static updatePost(userId, postId, caption, imageUrl) {
    const post = posts.find(
      (post) => post.userId == userId && post.id == postId
    );

    if (!post) {
      return null;
    }

    if (caption !== undefined && caption.trim() !== "") {
      post.caption = caption;
    }

    if (imageUrl !== undefined && imageUrl.trim() !== "") {
      post.imageUrl = imageUrl;
    }

    return post;
  }

  static deletePost(userId, postId) {
    const postIndex = posts.findIndex(
      (post) => post.userId == userId && post.id == postId
    );

    if (postIndex == -1) {
      return null;
    }

    const deletedPost = posts.splice(postIndex, 1)[0];
    return deletedPost;
  }
}

const posts = [
  new PostModel(
    1,
    1,
    "Enjoying the sunny beach!",
    "https://picsum.photos/id/101/500/300"
  ),
  new PostModel(
    2,
    2,
    "Just finished a 5k run 🏃‍♂️",
    "https://picsum.photos/id/102/500/300"
  ),
  new PostModel(
    3,
    3,
    "Homemade pizza night 🍕",
    "https://picsum.photos/id/103/500/300"
  ),
  new PostModel(
    4,
    4,
    "Hiking adventures in the mountains ⛰️",
    "https://picsum.photos/id/104/500/300"
  ),
  new PostModel(
    5,
    5,
    "My new puppy is the cutest! 🐶",
    "https://picsum.photos/id/105/500/300"
  ),
];
