const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    id : {
      type : DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey : true,
      allowNull : false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
    },
    description : {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: {
      type : DataTypes.DATEONLY,
    },
    rating : {
      type : DataTypes.FLOAT,
    },
    platforms : {
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false,
    },
  },{
    timestamps : false,
  });
};
