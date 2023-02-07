const Blog = require("./Blog")
const Comment = require("./Comment")
const User = require("./User")

Blog.belongsTo(User, {
  as: 'author',
foreignKey: 'userId'
})

Comment.belongsTo(User, {
  as: 'author',
foreignKey: 'userId'
})

Comment.belongsTo(Blog, {
  as: "blog",
  foreignKey: "blogId"
})