'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatRoomMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatRoomMessages.belongsTo(models.ChatRoom, {
        foreignKey: 'chatRoomId',
        targetKey: 'id'
      });
    }
  };
  ChatRoomMessages.init({
    author: DataTypes.STRING,
    message: DataTypes.TEXT,
    chatRoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChatRoomMessages',
  });
  return ChatRoomMessages;
};