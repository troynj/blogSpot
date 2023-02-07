const Blog = require("./Blog")
const Comment = require("./Comment")
const User = require("./User")

User.hasMany(Blog, {
  foreignKey: 'user_id',
onDelete: 'CASCADE'
})

User.hasMany(Comment, {
foreignKey: 'user_id',
as: 'authorId',
onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  as: 'BlogId',
})

module.exports = { Blog, Comment, User }