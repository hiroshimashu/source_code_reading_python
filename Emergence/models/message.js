export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: DataTypes.STRING,
  });
  Message.associate = (models) => {
    Message.belongsTo(models.Channel, {
      foreignKey: 'channleId',
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Message;
};
