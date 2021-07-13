const {DataTypes,Sequelize} = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('turistic_activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.ENUM(['1', '2', '3', '4', '5']),
    },
    term: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM(['Summer', 'Autumn', 'Winter','Spring',"Verano", "Otoño", "Invierno", "Primavera"]),
    },
  })
};
