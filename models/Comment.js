const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
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
    modelName: "comment",
  }
);

model.exports = Comment