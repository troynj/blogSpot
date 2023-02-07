const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    content: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
)

model.exports = Blog