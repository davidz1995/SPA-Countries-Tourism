const {DataTypes,Sequelize} = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alpha3Code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  });
};
