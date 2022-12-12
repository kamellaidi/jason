const { Model, DataTypes } = require("sequelize");
const sequelize = require('../database');

class List extends Model {}

List.init({
  name: DataTypes.TEXT,
}, {
  sequelize,
  tableName: 'list',
});

module.exports = List;