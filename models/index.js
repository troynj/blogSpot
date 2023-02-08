const Blog = require("./Blog")
const Comment = require("./Comment")
const User = require("./User")

User.hasMany(Blog, {
  foreignKey: 'authorId',
onDelete: 'CASCADE'
})

User.hasMany(Comment, {
foreignKey: 'authorId',
onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
  foreignKey: "blogId",
})

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   as: 'authorId'
// })

module.exports = { Blog, Comment, User }