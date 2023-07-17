const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    id: { // id
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: { // nombre
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: { // descripcion
      type: DataTypes.STRING,
      allowNull: false,
    },

    platforms: {  // plataformas
      type: DataTypes.STRING,
      allowNull: true,
    },

    background_image: { // background_image
      type: DataTypes.STRING,
      allowNull: true,
    },

    released: { //  released  
      type: DataTypes.STRING,
      allowNull: true,
    },

    rating: { // rating
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  // },{timestamps: true,
    // createdAt: 'creado',
    // updatedAt: false
});
};

// Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción *
// Fecha de lanzamiento
// Rating
// Plataformas *