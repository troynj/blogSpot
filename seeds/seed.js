const sequelize = require("../config/connection");
const { Blog, Comment, User } = require("../models");

const blogSeeds = require("./blog.json");
const commentSeeds = require("./comment.json");
const userSeeds = require("./user.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds);
  await Blog.bulkCreate(blogSeeds);
 await Comment.bulkCreate(commentSeeds);

  process.exit(0);
};

seedDatabase();
