const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (newReader) => {
        try {
          newReader.password = await bcrypt.hash(newReader.password, 10);
          return newReader;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedReader) => {
        try {
          updatedReader.password = await bcrypt.hash(
            updatedReader.password,
            10
          );
          return updatedReader;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
