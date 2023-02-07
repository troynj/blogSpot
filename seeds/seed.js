const sequelize = require('../config/connection');
const { Blog, Comment, User } = require('../models');

const blogSeeds = require("./blog.json")
const commentSeeds = require("./comment.json")
const userSeeds = require("./user.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const blogs = await Blog.bulkCreate(blogSeeds);
  const comments = await Comment.bulkCreate(commentSeeds);
  const users = await Comment.bulkCreate(userSeeds);

  process.exit(0);
};

seedDatabase();
