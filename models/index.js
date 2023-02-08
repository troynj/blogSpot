const Blog = require("./Blog")
const Comment = require("./Comment")
const User = require("./User")

User.hasMany(Blog, {
  foreignKey: 'user_id',
onDelete: 'CASCADE'
})

User.hasMany(Comment, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
})

// Blog.belongsTo(User, {
//   foreignKey: 'user_id'
// })

// Comment.belongsTo(Blog, {
//   foreignKey: "blog_id",
// })

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'

// })

module.exports = { Blog, Comment, User }